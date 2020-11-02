import { Component, Inject } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';

export class MyErrorStateMatcherXaPhuong implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  templateUrl: "./xa-phuong-create.component.html",
})
export class XaPhuongCreateComponent {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/api/DMXaPhuong';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  public matcher = new MyErrorStateMatcherXaPhuong();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<XaPhuongCreateComponent>,
    public _data: DataService
  ) {
    this.loaddata();
  }
  createform() {
    this.formdata = new FormGroup({
      MaQuanHuyen: new FormControl(this.data.MaQuanHuyen, [Validators.required, Validators.maxLength(128)]),
      MaPhuongXa: new FormControl('', [Validators.required, Validators.maxLength(128)]),
      TenPhuongXa: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      VietTat: new FormControl(''),
      Lock: new FormControl(false)
    });
  }
  setvalueform(values) {
    this.formdata.controls['MaQuanHuyen'].setValue(values.MaQuanHuyen);
    this.formdata.controls['MaPhuongXa'].setValue(values.MaPhuongXa);
    this.formdata.controls['TenPhuongXa'].setValue(values.TenPhuongXa);
    this.formdata.controls['VietTat'].setValue(values.VietTat);
    this.formdata.controls['Lock'].setValue(values.Lock);
  }
  loaddata() {
    this.createform();
    if (!isNullOrUndefined(this.data.Id)) {
      this.isLoading = true;
      this._data.get(this.API + '/getbyid/' + this.data.Id)
        .subscribe((res: any) => {
          this.const_data = res;
          this.setvalueform(this.const_data);
          this.isLoading = false;
        }, (error) => {
          this._data.handleError(error); this.isLoading = false;
        });
    }
    else {
      this.const_data = {};
    }
  }
  savedata(values) {
    if (this.formdata.invalid) { this._data.toastr_validator(); return; }
    this.issave = true;
    this.const_data.MaQuanHuyen = values.MaQuanHuyen;
    this.const_data.MaPhuongXa = values.MaPhuongXa;
    this.const_data.TenPhuongXa = values.TenPhuongXa;
    this.const_data.VietTat = values.VietTat;
    this.const_data.Lock = values.Lock;
    let isadd = isNullOrUndefined(this.data.Id);
    this._data.post(this.API + (isadd ? '/add' : '/update?maxp=' + this.data.Id), this.const_data)
      .subscribe((res: any) => {
        if (res.Loi) {
          this._data.toastr_duplicate_error();
          this.issave = false;
          this.const_data = []
          return;
        }
        this.issave = false;
        this._data.toastr_save_success(isadd);
        this.dialogRef.close(true);
      }, (error) => {
        this._data.handleError(error);
        this.issave = false;
      });
  }
}
