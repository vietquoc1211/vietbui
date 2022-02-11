import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DanTocCreateComponent } from './dan-toc-create/dan-toc-create.component';

@Component({
  selector: 'dan-toc',
  templateUrl: './dan-toc.component.html'
})
export class DanTocComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['code', 'name', 'lock', 'ThaoTao'];
  public filterColumns = ['name'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/danhmuc/dantoc';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public _data: DataService, private _dialog: DialogService) { }

  ngOnInit() {
    this.loaddata();
    this._data.mattable_custom(this.dataSource, this.paginator, this.sort, this.filterColumns, this.filtercustom);
  }

  loaddata() {
    this.isLoading = true;
    this._data.get(this.API + '/getall')
      .subscribe((res: any) => {
        this.dataSource.data = res.data;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }

  opendialog(item) {
    this._dialog.open_dialog_create(DanTocCreateComponent, { Id: item._id }, () => this.loaddata());
  }
  
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'delete Ethnic:' + item.name }, () => {
      this._data.delete(this.API + '/' + item._id)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata();
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
}
