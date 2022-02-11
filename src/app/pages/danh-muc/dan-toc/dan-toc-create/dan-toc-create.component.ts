import { Component, Inject } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA, ErrorStateMatcher } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';


@Component({
  templateUrl: "./dan-toc-create.component.html",
})
export class DanTocCreateComponent {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/danhmuc/dantoc';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DanTocCreateComponent>,
    public _data: DataService,
    private fb: FormBuilder
  ) {
    this.loaddata();
  }
  createform() {
    this.formdata = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      lock: new FormControl(false)
    });
  }
  setvalueform(values) {
    this.formdata.controls['code'].setValue(values.code);
    this.formdata.controls['name'].setValue(values.name);
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
    if (this.formdata.invalid) { this._data.toastr_validator(); return; }
    this.issave = true;
    this.const_data.code = values.code;
    this.const_data.name = values.name;
    this.const_data.lock = values.lock;
    let isadd = isNullOrUndefined(this.data.Id);
    if(isadd)
    {
      this._data.post(this.API + '/add', this.const_data)
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
    else {
      this._data.put(this.API + '/' + this.const_data._id, this.const_data)
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
}
