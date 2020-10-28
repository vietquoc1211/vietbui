import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { KhaiBaoLoaiTuVanCreateComponent } from './khai-bao-loai-tu-van-create/khai-bao-loai-tu-van-create.component';



@Component({
  templateUrl: './khai-bao-loai-tu-van.component.html'

})
export class KhaiBaoLoaiTuVanComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['LoaiTuVanID', 'TenLoaiTuVan', 'Lock', 'ThaoTao'];
  public filterColumns = ['TenLoaiTuVan'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'Lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/DMLoaiTuVan';

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
        this.dataSource.data = res;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  opendialog(id: any=null) {
    this._dialog.open_dialog_create(KhaiBaoLoaiTuVanCreateComponent, { Id: id }, () => this.loaddata());
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa loại tư vấn ' + item.TenLoaiTuVan }, () => {
      this._data.post(this.API + '/delete/' + item.LoaiTuVanID)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata();
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }

}
