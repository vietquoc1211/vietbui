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
  private API = '/api/DanToc';
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
      TenDanToc: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      Lock: new FormControl(false)
    });
  }
  setvalueform(values) {
    this.formdata.controls['TenDanToc'].setValue(values.TenDanToc);
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
    this.const_data.TenDanToc = values.TenDanToc;
    this.const_data.Lock = values.Lock;
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
