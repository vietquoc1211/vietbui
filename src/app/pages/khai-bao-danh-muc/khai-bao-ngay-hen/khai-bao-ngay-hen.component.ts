import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { KhaiBaoNgayHenCreateComponent } from './khai-bao-ngay-hen-create/khai-bao-ngay-hen-create.component';

@Component({
  selector: 'khai-bao-ngay-hen',
  templateUrl: './khai-bao-ngay-hen.component.html'
})
export class KhaiBaoNgayHenComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['ID', 'Ten', 'SoNgay', 'Lock', 'ThaoTao'];
  public filterColumns = ['ID', 'SoNgay', 'Ten'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'Lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/DMNgayHen';
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
    this._dialog.open_dialog_create(KhaiBaoNgayHenCreateComponent, { Id: ID }, () => this.loaddata());
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa ngày hẹn ' + item.ID }, () => {
      this._data.post(this.API + '/delete/' + item.ID)
        .subscribe((res: any) => {
          this._data.toastr_delete_success();
          this.loaddata();
        }, (error) => {
          this._data.handleError(error);
        });
    });
  }
  move(id, moveup: boolean = null) {
    this._data.post(this.API + (moveup ? '/moveup/' : '/movedown/') + id)
      .subscribe((res: any) => {
        this.loaddata();
      }, (error) => {
        this._data.handleError(error);
      });
  }
}
