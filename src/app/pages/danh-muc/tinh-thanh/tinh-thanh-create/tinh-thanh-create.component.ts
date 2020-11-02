import { Component, Inject, ViewChild } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ErrorStateMatcher } from '@angular/material/core';
import { ValidatorConstants } from 'src/app/_common/ValidatorConstants';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcherTinhThanh implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  templateUrl: "./tinh-thanh-create.component.html",
})
export class TinhThanhCreateComponent {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/DanhMuc/TinhThanh';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  code = new FormControl('', [Validators.required, Validators.maxLength(128)]);
  name = new FormControl('', [Validators.required, Validators.maxLength(256)]);
  matcher = new MyErrorStateMatcherTinhThanh();
  @ViewChild('form') form;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<TinhThanhCreateComponent>,
    public _data: DataService,
    private fb: FormBuilder
  ) {
    this.loaddata();
  }
  createform() {
    this.formdata = this.fb.group({
      code: this.code,
      name: this.name,
     lock: false
    });

  }
  setvalueform(values) {
    this.formdata.controls['code'].setValue(values.code);
    this.formdata.controls['name'].setValue(values.name);
    this.formdata.controls['slug'].setValue(values.slug);
    this.formdata.controls['lock'].setValue(values.lock);
  }
  loaddata() {
    this.createform();
    if (!isNullOrUndefined(this.data.Id)) {
      this.isLoading = true;
      var datapost = JSON.stringify({"id":""+this.data.Id+""});
      this._data.post(this.API + '/getbyid',datapost)
        .subscribe((res: any) => {
          this.const_data = res.data;
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
    if (this.formdata.invalid) {
      this._data.toastr_validator();
      return;
    }
    this.issave = true;
    this.const_data.code = values.code;
    this.const_data.name = values.name;
    this.const_data.slug = values.slug;
    this.const_data.lock = values.lock;
    let isadd = isNullOrUndefined(this.data.Id);
    this._data.post(this.API + (isadd ? '/add' : '/update'), this.const_data)
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
