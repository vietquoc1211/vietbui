import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TonGiaoCreateComponent } from './ton-giao-create/ton-giao-create.component';

@Component({
  selector: 'ton-giao',
  templateUrl: './ton-giao.component.html'
})
export class TonGiaoComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['TonGiaoID', 'TenTonGiao', 'Lock', 'ThaoTao'];
  public filterColumns = ['TenTonGiao'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'Lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/TonGiao';
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
  opendialog(ID: any=null) {
    this._dialog.open_dialog_create(TonGiaoCreateComponent, { Id: ID }, () => this.loaddata());
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa tôn giáo ' + item.TenTonGiao }, () => {
      this._data.post(this.API + '/delete/' + item.TonGiaoID)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata();
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
}
