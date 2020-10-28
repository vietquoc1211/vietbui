import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { KhaiBaoTuVanCreateComponent } from './khai-bao-tu-van-create/khai-bao-tu-van-create.component';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { isNull } from 'util';


@Component({
  selector: 'khai-bao-tu-van',
  templateUrl: './khai-bao-tu-van.component.html'
})
export class KhaiBaoTuVanComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['TuVanID', 'TenTuVan', 'GhiChu', 'Lock', 'ThaoTao'];
  public filterColumns = ['TenTuVan'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'Lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/DMTuVan';
  private APILTV = '/api/DMLoaiTuVan';
  protected loaiTuVan: any[] = [];
  public CtrlLoaiTuVan: FormControl = new FormControl(null);
  public fnmaploaituvan: Function = (data) => { return data.map(o => { return { id: o.LoaiTuVanID, text: o.TenLoaiTuVan } }) };
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  _isnull = isNull
  constructor(public _data: DataService, private _dialog: DialogService) { }

  ngOnInit() {
    this._data.mattable_custom(this.dataSource, this.paginator, this.sort, this.filterColumns, this.filtercustom);
  }
  loaddata(idtt) {
    this.isLoading = true;
    this._data.get(this.API + '/getbyloaitv/' + idtt)
      .subscribe((res: any) => {
        this.dataSource.data = res;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  opendialog(loaituvan: any=null, id: any=null, tentuvan: any=null) {
    this._dialog.open_dialog_create(KhaiBaoTuVanCreateComponent, { LoaiTuVanID: loaituvan, Id: id, name: tentuvan }, () => {
      this.loaddata(loaituvan);
    });
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa tư vấn ' + item.TenTuVan }, () => {
      this._data.post(this.API + '/delete/' + item.TuVanID)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata(item.LoaiTuVanID);
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }

  changeloaituvan(e: FormControl) {
    this, this.CtrlLoaiTuVan = e;
    if (this.CtrlLoaiTuVan.value && this.CtrlLoaiTuVan.value.id) {
      this.loaddata(e.value.id);
    } else {
      this.dataSource.data = [];
    }
  }
}
