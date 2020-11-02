import { ElementRef, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UrlConstants } from '../_common/UrlConstants';
import { MessageConstants } from '../_common/MessageConstants';
import { Observable } from 'rxjs/Observable';
import { isNull, isNullOrUndefined } from 'util';
import { FormGroup, Validators } from '@angular/forms';
import { SystemConstants } from '../_common/SystemConstants';

declare var $: any;

@Injectable()
export class DataService {
  private userlogin: any;
  private sys_const: any = SystemConstants;
  public login_mess: any = null;
  public currencyMask = {
    align: 'left',
    prefix: '',
    suffix: ' đ',
    thousands: '.',
    decimal: ',',
    precision: 4,
    allowNegative: false
  };
  public currencyMaskSL = {
    align: 'left',
    prefix: '',
    suffix: '',
    thousands: '.',
    decimal: ',',
    precision: 4,
    allowNegative: false
  };
  public currencyMaskSDT = {
    align: 'left',
    prefix: '',
    suffix: '',
    thousands: '',
    decimal: '',
    precision: 0,
    allowNegative: false
  };
  public currencyMaskRight = {
    align: 'right',
    prefix: '',
    suffix: '',
    thousands: '',
    decimal: '',
    precision: 0,
    allowNegative: false
  };
  public currencyMaskRightMoney = {
    align: 'right',
    prefix: '',
    suffix: ' đ',
    thousands: '.',
    decimal: ',',
    precision: 4,
    allowNegative: false
  };

  constructor(private _http: HttpClient,
    private _router: Router,
    private _Login: LoginService,
    private _Toastr: ToastrService) {
    this._Toastr.toastrConfig.positionClass = 'toast-bottom-right';
  }

  //#number
  onKeyDownMoney(e: KeyboardEvent) {
    if (e.keyCode != 16 &&
      e.keyCode != 37 &&
      e.keyCode != 38 &&
      e.keyCode != 39 &&
      e.keyCode != 40 &&
      e.keyCode != 9 &&
      e.keyCode != 8 &&
      e.keyCode != 0 &&
      e.keyCode != 109 &&
      e.keyCode != 110 &&
      e.keyCode != 190 &&
      e.keyCode != 188 &&
      (e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

  onKeyDownNumber(e: KeyboardEvent) {
    if (e.keyCode != 16 &&
      e.keyCode != 37 &&
      e.keyCode != 38 &&
      e.keyCode != 39 &&
      e.keyCode != 40 &&
      e.keyCode != 9 &&
      e.keyCode != 8 &&
      e.keyCode != 0 &&
      (e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }

  //#endregion number
  Scrollbar(el) {
    $(el).mCustomScrollbar({ theme: 'minimal-dark', alwaysShowScrollbar: true });
  }

  addpathserver(url: string): string {
    return UrlConstants.BASE_API + url;
  }

  //#region toastr
  toastr_checktoastr(mes: string): boolean {
    let isstop = false;
    if (this._Toastr.toasts.length > 0) {
      this._Toastr.toasts.forEach(item => {
        if (item.message == mes) {
          isstop = true;
          return;
        }
      });
    }
    return isstop;
  }

  toastr_excel_validator() {
    const mes = 'Không có dữ liệu để xuất file excel!';
    if (this.toastr_checktoastr(mes)) {
      return;
    }
    this._Toastr.warning(mes);
  }

  toastr_validator() {
    const mes = 'Vui lòng kiểm tra lại những nơi được tô đỏ.';
    if (this.toastr_checktoastr(mes)) {
      return;
    }
    this._Toastr.error(mes, 'Thông tin chưa hợp lệ!');
  }

  toastr_create_success() {
    this._Toastr.success('Đã thêm mới thành công thông tin.', 'Thêm mới thành công!');
  }

  toastr_update_success() {
    this._Toastr.success('Đã lưu thành công thông tin chỉnh sửa.', 'Chỉnh sửa thành công!');
  }

  toastr_delete_success() {
    this._Toastr.success('Đã xóa thành công thông tin.', 'Xóa thành công!');
  }

  toastr_questions_error() {
    this._Toastr.error('Thông tin chưa hợp lệ!', 'Vui lòng trả lời câu hỏi!');
  }

  toastr_filter_BN_error() {
    this._Toastr.error('Mã không tồn tại!', 'Không tìm thấy thông tin bệnh nhân!');
  }

  toastr_duplicate_error() {
    const mes = 'Mã đã tồn tại.';
    if (this.toastr_checktoastr(mes)) {
      return;
    }
    this._Toastr.error(mes, 'Thông tin chưa hợp lệ!');
  }

  toastr_StartDate_EndDate_error() {
    const mes = 'Ngày bắt đầu không được lớn hơn ngày kết thúc!';
    if (this.toastr_checktoastr(mes)) {
      return;
    }
    this._Toastr.error(mes);
  }

  toastr_currentpassword_error() {
    const mes = 'Mật khẩu hiện tại không đúng !';
    if (this.toastr_checktoastr(mes)) {
      return;
    }
    this._Toastr.error(mes);
  }

  toastr_upload_image_error() {
    const mes = 'Ảnh không được quá 1MB';
    if (this.toastr_checktoastr(mes)) {
      return;
    }
    this._Toastr.error(mes);
  }

  toastr_tiepdonOnline_succefully(name: string) {
    this._Toastr.info(`<span class="color-message-tiepdononline">${name}</span> <span class="text-tiepdononline_">đã hẹn khám thành công !</span>`, null, {
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right'
    });
  }

  toastr_errormassage(body: any): boolean {
    if (body && body.errorMassage) {
      this._Toastr.error(body.errorMassage);
      return true;
    }
    return false;
  }

  toastr_save_success(add: boolean) {
    add ? this.toastr_create_success() : this.toastr_update_success();
  }

  toastr_info(mes: string) {
    this._Toastr.info(mes, null, { positionClass: 'toast-top-right' });
  }

  toastr_error(err: any) {
    const mes = err;
    if (this.toastr_checktoastr(mes)) {
      return;
    }
    this._Toastr.error(err);
  }
  toastr_error_param_throw(err: any) {
    this._Toastr.error(err);
  }

  playring() {
    var audio = new Audio();
    audio.src = './assets/media/ring.mp3';
    audio.load();
    audio.play();
  }

  //#endregion toastr

  //#region mattable custom
  mattable_custom(datasource: MatTableDataSource<any>, mat_paginator: MatPaginator = null, mat_sort: MatSort = null, filterColumns: string[] = [], customfilter: any[] = []) {
    if (mat_paginator != null) {
      datasource.paginator = mat_paginator;
    }
    if (mat_sort != null) {
      datasource.sort = mat_sort;
    }
    datasource.filterPredicate =
      (data: any, filter: string) => {
        let result = false;
        if (customfilter && customfilter.length > 0) {
          customfilter.forEach(fun => {
            if (fun(data, filter)) {
              result = true;
              return;
            }
          });
        }
        if (filterColumns && filterColumns.length > 0) {
          filterColumns.forEach(item => {
            if (data[item] && data[item].toString().trim().toLowerCase().indexOf(filter) != -1) {
              result = true;
              return;
            }
          });
        }
        return result;
      };
  }

  mattable_filter(filterValue: string, datasource: MatTableDataSource<any>) {
    datasource.filter = filterValue.trim().toLowerCase();
  }

  fun_filter_texttoboole(equa_filter: string, columnname: string) {
    return (row, filtervalue) => {
      if (filtervalue == equa_filter || filtervalue == this.vietnamse(equa_filter)) {
        return row[columnname];
      }
    };
  }

  vietnamse(str: string) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    str = str.replace(/\u02C6|\u0306|\u031B/g, '');
    return str;
  }

  //#endregion mattable custom

  //#region reques data
  createrheader() {
    this.userlogin = this._Login.getLoggedInUser();
    return {
      'Content-Type': 'application/json',
      'Authorization': (isNull(this.userlogin) ? '' : ('Bearer ' + this.userlogin.token))
    };
  }

  get(uri: string) {
    const header = this.createrheader();
    // const observable = this._http.get(UrlConstants.BASE_API + uri, { headers: header }).toPromise();
    // const reuslt = Observable.create((observer) => {
    //     observable.then((res: any) => {
    //         if (this.checkresponse(res)) {
    //             observer.next(res);
    //             observer.complete();
    //         }
    //         else
    //             observer.complete();
    //     });
    // });
    // return reuslt;
    return this._http.get(UrlConstants.BASE_API + uri, { headers: header });
  }

  post(uri: string, data?: any) {
    let header = this.createrheader();
    return this._http.post(UrlConstants.BASE_API + uri, data, { headers: header });
  }

  checkresponse(result: any): Boolean {
    if (result.ResponseError) {
      this._Toastr.error(result.ThongBao);
      return false;
    }
    return true;
  }

  public handleError(error: any, el?: string) {
    if (error.status == 404) {
      this._Toastr.error(MessageConstants.API404);
      return;
    }
    if (error.status === 401) {
      clearTimeout(this.login_mess);
      this.login_mess = setTimeout(() => {
        this._Toastr.error(MessageConstants.LOGIN_AGAIN_MSG);
      }, 400);
      this._Login.logout();
      this._router.navigate([UrlConstants.LOGIN]);
      return;
    }
    if (error.status === 400) {
      let errMsg = '';
      try {
        const dummy = error.error || error.Message;
        if (Array.isArray(dummy)) {
          errMsg = dummy.join('</br>');
        } else {
          errMsg = dummy;
        }
      } catch (Error) {
      }
      try {
        if (!errMsg || 0 === errMsg.length) {
          errMsg = error._body;
        }
        if (errMsg.startsWith('"') && errMsg.endsWith('"')) {
          errMsg = errMsg.slice(1, -1);
        }
      } catch (Error) {
      }
      if (errMsg !== '') {
        this._Toastr.error(errMsg);
      } else {
        this._Toastr.error(MessageConstants.MS400);
      }
    } else if (error.status === 406) {
      if (el != null) {
        $(el).remove();
      }
      return;
    } else if (error.status === 403) {
      this._router.navigate([UrlConstants.ACCESSDENIED]);
    } else if (error.status === 405) {
      this._Toastr.error(MessageConstants.KHONGDUOCPHEP);
    } else if (error.status === 409) {
      this._Toastr.error(MessageConstants.CONFLICT_MSG);
    } else if (error.status === 0 || error.status === 500) {
      try {
        // có thông báo từ server trả về
        const str = error.error || error.Message;
        if (typeof str == 'string') {
          const from = str.indexOf('"ExceptionMessage":"') + 20;
          const to = str.indexOf('","ExceptionType":');
          const ms = str.substring(from, to);
          this._Toastr.error(ms);
        }
        else if (typeof str == 'object') {

          if(isNullOrUndefined(str.ExceptionMessage))
            this._Toastr.error(MessageConstants.SERVE_ERROR_MSG);
          else
            this._Toastr.error(str.ExceptionMessage);
        }
      } catch (Error) {
        this._Toastr.error(MessageConstants.SERVE_ERROR_MSG);
      }
    } else {
      const errMsg = JSON.parse(error._body || '{}').error || '';
      if (errMsg.length > 0) {
        this._Toastr.error(errMsg);
        return Observable.throw(errMsg);
      }
    }
  }

  //#endregion reques data

  //#region pager
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    let totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  //#endregion
  // Khám mắt
  //#region Set Option Control
  /**
   * set options cho controls
   * @param control danh sách tên controls
   * @param option 0 disable control còn lại enable và set Validators cho control
   */
  setOptionsControl(formdata: FormGroup, control: any = [], option) {
    if (control.length > 0) {
      control.forEach(element => {
        if (option === 0) {
          formdata.controls[element].disable();
          formdata.controls[element].reset();
        } else {
          formdata.controls[element].enable();
          formdata.controls[element].setValidators([Validators.required]);
        }
        formdata.controls[element].updateValueAndValidity();
      });
    }
  }

  //#endregion
  //#region radio controls
  /**
   * Event click của radio controls
   * @param event radio event click
   * @param key formControlName
   * @param controls danh sách input controls
   * @param input là radio có chứa input controls
   */
  checkState_radio(form: ElementRef, formdata: FormGroup, event, key, controls: any = [], input = null) {
    let val = formdata.controls[key].value;
    if (val === event.value) {
      if (input) {
        this.setOptionsControl(formdata, controls, 0);
      }
      setTimeout(() => {
        event.checked = false;
        formdata.controls[key].reset();
      });
    } else {
      this.setOptionsControl(formdata, controls, input ? 1 : 0);
      this.setFocus(form, controls);
    }
  }

  //#endregion
  //#region checkbox controls
  /**
   * Event click của checkbox controls
   * @param controls danh sách input controls
   * @param event  Event click của radio controls
   */
  checkState_checkbox(form: ElementRef, formdata: FormGroup, controls: any = [], event) {
    if (controls.length > 0) {
      this.setOptionsControl(formdata, controls, event.checked === true ? 1 : 0);
      if (event.checked === true) {
        this.setFocus(form, controls);
      }
    }
  }

  //#endregion
  //#region setFocus
  /**
   * set focus vào control đầu tiên trong danh sách nếu có
   * @param controls danh sách
   */
  setFocus(form: ElementRef, controls: any = []) {
    if (controls && controls.length > 0) {
      const control = form.nativeElement.querySelectorAll('input[formControlName="' + controls[0] + '"]')[0];
      if (control) {
        setTimeout(() => {
          control.focus();
        });
      }
    }
  }
  makeid(): string {
    let text = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 8; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

  //#endregion
}

