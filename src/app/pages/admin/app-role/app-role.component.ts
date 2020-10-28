import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../../_services/data.service';
import { DialogService } from '../../../_services/dialog.service';
import { AppRoleCreateComponent } from './app-role-create/app-role-create.component';

@Component({
  templateUrl: "./app-role.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppRoleComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['Id', 'Name', 'Description', 'Lock', 'ThaoTao'];
  public filterColumns = ['Id', 'Name', 'Description'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'Lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/AppRoles';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public _data: DataService, private _dialog: DialogService) {
  }
  ngOnInit() {
    this.loaddata();
    this._data.mattable_custom(this.dataSource, this.paginator, this.sort, this.filterColumns, this.filtercustom);
  }
  loaddata() {
    this.isLoading = true;
    this._data.get(this.API + '/getall')
      .subscribe((res: any) => {
        this.dataSource.data = res;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  opendialog(id: any=null) {
    this._dialog.open_dialog_create(AppRoleCreateComponent,{ Id: id },()=>this.loaddata());
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa quyền ' + item.FunctionName }, () => {
      this._data.post(this.API + '/delete/' + item.Id)
          .subscribe((res: any) => {
            this._data.toastr_delete_success();
            this.loaddata();
          }, (error) => {
            this._data.handleError(error);
          });
    })
  }
}