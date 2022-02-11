import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PhuongXaCreateComponent } from './phuong-xa-create/phuong-xa-create.component';
import { FormControl } from '@angular/forms';
import { isNull } from 'util';

@Component({
  selector: 'phuong-xa',
  templateUrl: './phuong-xa.component.html'
})
export class PhuongXaComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['code', 'name', 'name_with_type', 'lock', 'action'];
  public filterColumns = ['code', 'name', 'name_with_type'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/DanhMuc/PhuongXa';
  protected tinhthanh: any[] = [];
  protected quanHuyen: any[] = [];
  public CtrlTinh: FormControl = new FormControl(null);
  public CtrlQuan: FormControl = new FormControl(null);
  public fnmaptinh: Function = (data) => { return data.map(o => { return { id: o.code, text: o.name } }) };
  public fnmapquan: Function = (data) => { return data.map(o => { return { id: o.code, text: o.name } }) };
  public apiQuan: string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  _isnull = isNull;
  constructor(public _data: DataService, private _dialog: DialogService) { }

  ngOnInit() {
    this._data.mattable_custom(this.dataSource, this.paginator, this.sort, this.filterColumns, this.filtercustom);
  }

  loaddata(idqh) {
    this.isLoading = true;
    this._data.get(this.API + '/getbyquanhuyenid/' + idqh)
      .subscribe((res: any) => {
        this.dataSource.data = res.data;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  
  opendialog(maQuanHuyen: any, id: any=null) {
    this._dialog.open_dialog_create(PhuongXaCreateComponent, { MaQuanHuyen: maQuanHuyen, Id: id, nameTT: this.CtrlTinh.value.text, name: this.CtrlQuan.value.text }, () => {
      this.loaddata(maQuanHuyen);
    });
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa xã phường ' + item.TenPhuongXa }, () => {
      this._data.post(this.API + '/delete/' + item.MaPhuongXa)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata(item.MaQuanHuyen);
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
  changeTinh(e: FormControl) {
    this.CtrlTinh = e;
    if (this.CtrlTinh.value && this.CtrlTinh.value.id) {
      this.apiQuan = '/danhmuc/quanhuyen/getbytinhthanhid/' + this.CtrlTinh.value.id;
      this.dataSource.data = [];
    }
    else {
      this.dataSource.data = [];
      this.apiQuan = '';
    }
  }
  changeQuan(e: FormControl) {
    this.CtrlQuan = e;
    if (this.CtrlQuan.value && this.CtrlQuan.value.id) {
      this.loaddata(this.CtrlQuan.value.id);
    } else {
      this.dataSource.data = [];
    }
  }
}
