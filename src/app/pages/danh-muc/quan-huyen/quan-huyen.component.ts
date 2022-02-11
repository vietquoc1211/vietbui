import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { QuanHuyenCreateComponent } from './quan-huyen-create/quan-huyen-create.component';
import { FormControl, Validators } from '@angular/forms';
import { ReplaySubject, Subject, from } from 'rxjs';
import { filter, tap, takeUntil, debounceTime, map, delay, take } from 'rxjs/operators';
import { isNull, isNullOrUndefined } from 'util';

@Component({
  selector: 'quan-huyen',
  templateUrl: './quan-huyen.component.html'
})
export class QuanHuyenComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['code', 'name', 'lock', 'action'];
  public filterColumns = ['code', 'name'];
  public filtercustom = [this._data.fun_filter_texttoboole('lock', 'lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/DanhMuc/QuanHuyen';
  private name: any;
  protected tinhThanh: any[] = [];
  public CtrlQuan: FormControl = new FormControl(null);
  public fnmapquan: Function = (data) => { return data.map(o => { return { id: o.code, text: o.name } }) };


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('tinhthanh') tinhthanhchild;


  constructor(public _data: DataService, private _dialog: DialogService) { }

  ngOnInit() {
    this._data.mattable_custom(this.dataSource, this.paginator, this.sort, this.filterColumns, this.filtercustom);
  }

  loaddata(idtt) {
    this.isLoading = true;
    this._data.get(this.API + '/getbytinhthanhid/' + idtt)
      .subscribe((res: any) => {
        this.dataSource.data = res.data;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  opendialog(matt: any, id: any=null) {
    this._dialog.open_dialog_create(QuanHuyenCreateComponent, { MaTT: matt, Id: id }, () => {
      this.loaddata(matt);
    });
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa quận huyện ' + item.TenQuanHuyen }, () => {
      this._data.post(this.API + '/delete/' + item.MaQuanHuyen)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata(item.MaTT);
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
  changequan(e: FormControl) {
    this.CtrlQuan = e;
    if (e.value && e.value.id) {
      this.loaddata(e.value.id)
    } else {
      this.dataSource.data = [];
    }
  }
}
