import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { ThongSoMacDinhChiTietCreateComponent } from './thong-so-mac-dinh-chi-tiet-create/thong-so-mac-dinh-chi-tiet-create.component';
import { FormControl, Validators } from '@angular/forms';
import { ReplaySubject, Subject, from } from 'rxjs';
import { filter, tap, takeUntil, debounceTime, map, delay, take } from 'rxjs/operators';
import { isNull, isNullOrUndefined } from 'util';

@Component({
  selector: 'thong-so-mac-dinh-chi-tiet',
  templateUrl: './thong-so-mac-dinh-chi-tiet.component.html'
})
export class ThongSoMacDinhChiTietComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['ThongSoMacDinhChiTietID', 'ThongSoMacDinhID', 'Key', 'GiaTri', 'ThaoTao'];
  public filterColumns = ['ThongSoMacDinhID', 'Key', 'GiaTri'];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/ThongSoMacDinhChiTiet';
  private name: any;
  private valueSearchSelected: any;
  private disable: boolean;
  protected thongsomacdinh: any[] = [];
  public apiloai: string;
  public LoaiChiSoArray: any;
  public CtrlThongSoMacDinh: FormControl = new FormControl(null);
  public fnmapThongSoMacDinh: Function = (data) => { return data.map(o => { return { id: o.id, ma: o.ma, text: o.text } }) };


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(public _data: DataService, private _dialog: DialogService) { }

  ngOnInit() {
    this._data.mattable_custom(this.dataSource, this.paginator, this.sort, this.filterColumns);
  }

  loaddata(idthongsomacdinh) {
    this.isLoading = true;
    this._data.get(this.API + '/getbyparent/' + idthongsomacdinh)
      .subscribe((res: any) => {
        this.dataSource.data = res;
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  opendialog(mathongsomacdinh: any=null, id: any=null) {
    this._dialog.open_dialog_create(ThongSoMacDinhChiTietCreateComponent,
      { ThongSoMacDinhID: mathongsomacdinh, Id: id, name: this.CtrlThongSoMacDinh.value.text },
      (e) => {
        if (e === '' || isNullOrUndefined(e)) {
          return;
        }
        if (e !== '' || !isNullOrUndefined(e)) {
          this.LoaiChiSoArray = e;
          this.loaddata(e);
        }
      }
      , true);
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa thông số mặc định chi tiết ' + item.GiaTri }, () => {
      this._data.post(this.API + '/delete/' + item.ThongSoMacDinhChiTietID)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata(item.ThongSoMacDinhID);
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
  changethongsomacdinhchitiet(e: FormControl) {
    this.CtrlThongSoMacDinh = e;
    if (e.value && e.value.id) {
      this.loaddata(e.value.id);
    } else {
      this.dataSource.data = [];
    }
  }
}