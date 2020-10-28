import { Component, Inject } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  templateUrl: "./app-user-create.component.html",
})
export class AppUserCreateComponent {
  public hidepass = true;
  public matcher = new MyErrorStateMatcher();
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/api/Appuser';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  public beforeQH: Function = (o) => { return o.matt == null };
  public beforePX: Function = (o) => { return o.maqh == null };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppUserCreateComponent>,
    public _data: DataService
  ) {
    this.data.Id = this.data.Id || null;
    this.loaddata();
  }
  checkPasswords(group: FormGroup) {
    let pass = group.controls.Password.value;
    let confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true }
  }
  createform() {
    const newuser = this.data.Id == null;
    this.formdata = new FormGroup({
      UserName: new FormControl({ value: '', disabled: !newuser }, [Validators.required, Validators.pattern(this.vali_const.v_username)]),
      Password: new FormControl('', newuser ? [Validators.required, Validators.pattern(this.vali_const.v_password)] : [Validators.pattern(this.vali_const.v_password)]),
      confirmPassword: new FormControl(''),
      MaNV: new FormControl('', [Validators.pattern(this.vali_const.v_manv)]),
      HoTen: new FormControl('', [Validators.required, Validators.pattern(this.vali_const.v_fullname)]),
      NgaySinh: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      GioiTinh: new FormControl('1', [Validators.required]),
      SDT: new FormControl('', [Validators.required, Validators.pattern(this.vali_const.v_phone)]),
      Email: new FormControl('', [Validators.required, Validators.pattern(this.vali_const.v_email)]),
      DiaChi: new FormControl('', [Validators.maxLength(250)]),
      MaTinhThanh: new FormControl(null, [Validators.required]),
      MaQuanHuyen: new FormControl(null, [Validators.required]),
      MaPhuongXa: new FormControl(null, [Validators.required]),
      Anh: new FormControl(''),
      Lock: new FormControl(false)
    }, this.checkPasswords);
  }
  setvalueform(values) {
    this.formdata.controls.UserName.setValue(values.UserName);
    this.formdata.controls.MaNV.setValue(values.MaNV);
    this.formdata.controls.HoTen.setValue(values.HoTen);
    this.formdata.controls.NgaySinh.setValue(values.NgaySinh);
    this.formdata.controls.GioiTinh.setValue('' + (values.GioiTinh || 1));
    this.formdata.controls.SDT.setValue(values.SDT);
    this.formdata.controls.Email.setValue(values.Email);
    this.formdata.controls.DiaChi.setValue(values.DiaChi);
    this.formdata.controls.MaTinhThanh.setValue(values.MaTinhThanh);
    this.formdata.controls.MaQuanHuyen.setValue(values.MaQuanHuyen);
    this.formdata.controls.MaPhuongXa.setValue(values.MaPhuongXa);
    this.formdata.controls.Lock.setValue(values.LockoutEnabled);
    this.beforeQH = (o) => { return o.matt == values.MaTinhThanh };
    this.beforePX = (o) => { return o.maqh == values.MaQuanHuyen };
  }
  loaddata() {
    this.createform();
    this.isLoading = true;
    this._data.get(this.API + '/getbyid/' + this.data.Id)
      .subscribe((res: any) => {
        this.const_data = res;
        this.setvalueform(this.const_data);
        this.isLoading = false;
      }, (error) => {
        this._data.handleError(error);
        this.isLoading = false;
      });
  }
  savedata(values) {
    if (this.formdata.invalid) { this._data.toastr_validator(); return; }
    this.issave = true;
    let isadd = isNullOrUndefined(this.data.Id);
    if (isadd)
      this.const_data.UserName = values.UserName;
    this.const_data.Password = values.Password;
    this.const_data.MaNV = values.MaNV;
    this.const_data.HoTen = values.HoTen;
    this.const_data.NgaySinh = values.NgaySinh;
    this.const_data.GioiTinh = values.GioiTinh;
    this.const_data.SDT = values.SDT;
    this.const_data.Email = values.Email;
    this.const_data.DiaChi = values.DiaChi;
    this.const_data.MaTinhThanh = values.MaTinhThanh.id;
    this.const_data.MaQuanHuyen = values.MaQuanHuyen.id;
    this.const_data.MaPhuongXa = values.MaPhuongXa.id;
    this.const_data.LockoutEnabled = values.Lock;
    this._data.post(this.API + (isadd ? '/createuser' : '/updateuser'), this.const_data)
      .subscribe((res: any) => {
        this.issave = false;
        this._data.toastr_save_success(isadd);
        this.dialogRef.close(true);
      }, (error) => {
        this._data.handleError(error);
        this.issave = false;
      });
  }
  changetinhthanh(event) {
    this.formdata.controls.MaTinhThanh = event;
    if (event && event.value)
      this.beforeQH = (o) => { return o.matt == event.value.id };
    else
      this.beforeQH = (o) => { return o.matt == null };
    this.beforePX = (o) => { return o.maqh == null };
  }
  changequanhuyen(event) {
    this.formdata.controls.MaQuanHuyen = event;
    if (event && event.value)
      this.beforePX = (o) => { return o.maqh == event.value.id };
    else
      this.beforePX = (o) => { return o.maqh == null };
  }
  changephuongxa(event) {
    this.formdata.controls.MaPhuongXa = event;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const group = (control.parent) as FormGroup;
    const pass = group.controls.Password;
    const confirmPass = group.controls.confirmPassword;
    return (pass.invalid || !(pass.value === confirmPass.value));
  }
}