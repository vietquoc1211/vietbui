import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogService } from 'src/app/_services/dialog.service';
import { DataService } from 'src/app/_services/data.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ThongSoHeThongCreateComponent } from './thong-so-he-thong-create/thong-so-he-thong-create.component';

@Component({
  selector: 'thong-so-he-thong',
  templateUrl: './thong-so-he-thong.component.html'
})
export class ThongSoHeThongComponent implements OnInit {
  public isLoading = false;
  public displayedColumns = ['Id', 'Key', 'Ten', 'GiaTri','MoTa','GetLogin', 'Lock', 'ThaoTao'];
  public filterColumns = ['Key', 'Ten'];
  public filtercustom = [this._data.fun_filter_texttoboole('khóa', 'Lock')];
  public dataSource: any = new MatTableDataSource<any>();
  private API = '/api/DMThongSo';
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
  opendialog(Id: any=null) {
    this._dialog.open_dialog_create(ThongSoHeThongCreateComponent, { Id: Id }, () => this.loaddata());
  }
  delete(item) {
    this._dialog.open_dialog_confirm_delete({ Title: 'Xóa thông số ' + item.Ten }, () => {
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
