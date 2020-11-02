import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TinhThanhCreateComponent } from './tinh-thanh-create/tinh-thanh-create.component';

@Component({
  templateUrl: './tinh-thanh.component.html'

})
export class TinhThanhComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['code', 'name','slug','type','name_with_type', 'lock', 'ThaoTao'];
  public filterColumns = ['code', 'name'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/DanhMuc/TinhThanh';
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
  opendialog(id: any=null) {
    this._dialog.open_dialog_create(TinhThanhCreateComponent, { Id: id }, () => this.loaddata());
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa tỉnh ' + item.TenTT }, () => {
      this._data.post(this.API + '/delete/' + item.MaTT)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata();
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
}
