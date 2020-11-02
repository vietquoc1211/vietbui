import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { XaPhuongCreateComponent } from './xa-phuong-create/xa-phuong-create.component';
import { FormControl, Validators } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil, startWith } from 'rxjs/operators';
import { isNull } from 'util';

@Component({
  selector: 'xa-phuong',
  templateUrl: './xa-phuong.component.html'
})
export class XaPhuongComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['MaPhuongXa', 'TenPhuongXa', 'VietTat', 'Lock', 'ThaoTao'];
  public filterColumns = ['MaPhuongXa', 'TenPhuongXa', 'VietTat'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'Lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/DMXaPhuong';
  protected tinhthanh: any[] = [];
  protected quanHuyen: any[] = [];
  public CtrlTinh: FormControl = new FormControl(null);
  public CtrlQuan: FormControl = new FormControl(null);
  public fnmaptinh: Function = (data) => { return data.map(o => { return { id: o.MaTT, text: o.TenTT } }) };
  public fnmapquan: Function = (data) => { return data.map(o => { return { id: o.MaQuanHuyen, text: o.TenQuanHuyen } }) };
  public apiQuan: string;
  private tinhid: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  _isnull = isNull;
  constructor(public _data: DataService, private _dialog: DialogService) { }

  ngOnInit() {
    this._data.mattable_custom(this.dataSource, this.paginator, this.sort, this.filterColumns, this.filtercustom);
  }

  loaddata(idqh) {
    this.isLoading = true;
    this._data.get(this.API + '/getbymaqh/' + idqh)
      .subscribe((res: any) => {
        this.dataSource.data = res;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  opendialog(maQuanHuyen: any, id: any=null) {
    this._dialog.open_dialog_create(XaPhuongCreateComponent, { MaQuanHuyen: maQuanHuyen, Id: id, nameTT: this.CtrlTinh.value.text, name: this.CtrlQuan.value.text }, () => {
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
      this.apiQuan = '/api/dmquanhuyen/getbymatinhthanhlock/' + this.CtrlTinh.value.id;
      this.dataSource.data = [];
    }
    else {
      this.dataSource.data = [];
      this.apiQuan = '';
      this.tinhid = null;
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
