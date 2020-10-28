import { Component, Inject } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
@Component({
  templateUrl: "./thong-so-he-thong-create.component.html",
})
export class ThongSoHeThongCreateComponent {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/api/DMThongSo';
  public formdata: FormGroup;
  public vali_const = ValidatorConstants;
  public const_data: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ThongSoHeThongCreateComponent>,
    public _data: DataService,
    private fb: FormBuilder
  ) {
    this.loaddata();
  }
  createform() {
    this.formdata = new FormGroup({
      Key: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      Ten: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      GiaTri: new FormControl('', Validators.required),
      MoTa: new FormControl(''),
      GetLogin: new FormControl(Validators.required),
      Lock: new FormControl(false)
    });
  }
  setvalueform(values) {
    this.formdata.controls['Key'].setValue(values.Key);
    this.formdata.controls['Ten'].setValue(values.Ten);
    this.formdata.controls['GiaTri'].setValue(values.GiaTri);
    this.formdata.controls['Lock'].setValue(values.Lock);
    this.formdata.controls['MoTa'].setValue(values.MoTa);
    this.formdata.controls['GetLogin'].setValue(values.GetLogin);
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
    this.const_data.Key = values.Key;
    this.const_data.Ten = values.Ten;
    this.const_data.GiaTri = values.GiaTri;
    this.const_data.Lock = values.Lock;
    this.const_data.MoTa = values.MoTa;
    this.const_data.GetLogin = values.GetLogin;
    let isadd = isNullOrUndefined(this.data.Id);
    this._data.post(this.API + (isadd ? '/add' : '/update'), this.const_data)
      .subscribe((res: any) => {
        this.issave = false;
        this._data.toastr_save_success(isadd);
        this.dialogRef.close(true);
      }, (error) => {
        this._data.handleError(error);
        this.issave = false;
      });
  }
}