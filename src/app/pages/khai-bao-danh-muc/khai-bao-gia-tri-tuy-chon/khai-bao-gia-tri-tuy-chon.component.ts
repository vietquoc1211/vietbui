import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GiaTriTuyChonCreateComponent } from './khai-bao-gia-tri-tuy-chon-create/khai-bao-gia-tri-tuy-chon-create.component';

@Component({
  selector: 'gia-tri-tuy-chon',
  templateUrl: './khai-bao-gia-tri-tuy-chon.component.html'
})
export class GiaTriTuyChonComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['Id', 'Form', 'Key', 'Value', 'ThaoTao'];
  public filterColumns = ['Form', 'Key', 'Value'];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/GiaTriTuyChon';
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
    this._dialog.open_dialog_create(GiaTriTuyChonCreateComponent, { Id: id }, () => this.loaddata());
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa tuỳ chọn giá trị tuỳ chọn: ' + item.Value }, () => {
      this._data.post(this.API + '/delete/' + item.Id)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata();
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
}