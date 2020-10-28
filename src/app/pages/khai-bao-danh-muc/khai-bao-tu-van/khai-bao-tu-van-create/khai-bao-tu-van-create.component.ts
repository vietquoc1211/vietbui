import { Component, Inject } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
@Component({
  templateUrl: "./khai-bao-tu-van-create.component.html",
})
export class KhaiBaoTuVanCreateComponent {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/api/DMTuVan';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<KhaiBaoTuVanCreateComponent>,
    public _data: DataService
  ) {
    this.loaddata();
  }
  createform() {
    this.formdata = new FormGroup({
      TenTuVan: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      LoaiTuVanID: new FormControl('', [Validators.required]),
      GhiChu: new FormControl(''),
      Lock: new FormControl(false)
    });

    // this.formdata.controls['MaTT'].disable();
  }
  setvalueform(values) {
    this.const_data.LoaiTuVanID = values.LoaiTuVanID;
    this.formdata.controls['TenTuVan'].setValue(values.TenTuVan);
    this.formdata.controls['GhiChu'].setValue(values.GhiChu);
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
      setTimeout(() => {
        this.const_data.LoaiTuVanID = this.data.LoaiTuVanID;
      }, 10);
    }
  }
  savedata(values) {
    if (this.formdata.invalid) { this._data.toastr_validator(); return; }
    this.issave = true;
    this.const_data.LoaiTuVanID = values.LoaiTuVanID.id;
    this.const_data.TenTuVan = values.TenTuVan;
    this.const_data.GhiChu = values.GhiChu;
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
  resetForm(form) {
    form.resetForm();
    this.const_data.LoaiTuVanID = null;
    this.loaddata();
  }
}