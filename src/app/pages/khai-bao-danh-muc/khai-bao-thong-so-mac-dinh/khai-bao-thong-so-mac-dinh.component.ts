import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { KhaiBaoThongSoMacDinhCreateComponent } from './khai-bao-thong-so-mac-dinh-create/khai-bao-thong-so-mac-dinh-create.component';

@Component({
  selector: 'khai-bao-thong-so-mac-dinh',
  templateUrl: './khai-bao-thong-so-mac-dinh.component.html'
})
export class KhaiBaoThongSoMacDinhComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['ThongSoMacDinhID', 'Key', 'TenForm', 'ThaoTao'];
  public filterColumns = ['Key', 'TenForm'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'Lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/ThongSoMacDinh';
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public _data: DataService, private _dialog: DialogService) { }
  ngOnInit() {
    this.loaddata();
    this._data.mattable_custom(this.dataSource, this.paginator, this.sort, this.filterColumns);
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
    this._dialog.open_dialog_create(KhaiBaoThongSoMacDinhCreateComponent, { Id: id }, () => this.loaddata());
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa thông số mặc định ' + item.TenForm }, () => {
      this._data.post(this.API + '/delete/' + item.ThongSoMacDinhID)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata();
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
}