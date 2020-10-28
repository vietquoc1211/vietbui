import { Component, Inject, ViewChild } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ErrorStateMatcher } from '@angular/material/core';
import { ValidatorConstants } from 'src/app/_common/ValidatorConstants';

@Component({
  templateUrl: './khai-bao-thong-so-mac-dinh-create.component.html'
})
export class KhaiBaoThongSoMacDinhCreateComponent {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/api/ThongSoMacDinh';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  @ViewChild('form') form;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<KhaiBaoThongSoMacDinhCreateComponent>, public _data: DataService, private fb: FormBuilder) 
  {
    this.loaddata();
  }

  createform() {
    this.formdata = new FormGroup({
      Key: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      TenForm: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    });
  }
  
  setvalueform(values) {
    this.formdata.controls['Key'].setValue(values.Key);
    this.formdata.controls['TenForm'].setValue(values.TenForm);
  }
  loaddata() {
    this.createform();
    if (!isNullOrUndefined(this.data.Id)) {
      this.isLoading = true;
      this._data.get(this.API + '/getbyid/' + (this.data.Id))
        .subscribe((res: any) => {
          this.const_data = res;
          this.setvalueform(this.const_data);
          this.isLoading = false;
        }, (error) => {
          this._data.handleError(error); this.isLoading = false;
        });
    } else {
      this.const_data = {};
    }
  }
  savedata(values) {
    if (this.formdata.invalid) {
      this._data.toastr_validator();
      return;
    }
    this.issave = true;
    this.const_data.Key = values.Key;
    this.const_data.TenForm = values.TenForm;
    let isadd = isNullOrUndefined(this.data.Id);
    this._data.post(this.API + (isadd ? '/add' : '/update'), this.const_data)
      .subscribe((res: any) => {
        if (res.Loi) {
          this._data.toastr_duplicate_error();
          this.issave = false;
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