import { Component, Inject } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
@Component({
  templateUrl: "./app-function-create.component.html",
})
export class AppFunctionCreateComponent {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/api/AppFunction';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppFunctionCreateComponent>,
    public _data: DataService
  ) {
    this.loaddata();
  }
  createform() {
    this.formdata = new FormGroup({
      FunctionCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9A-Z]{6}$')]),
      FunctionName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      Description: new FormControl(''),
      Lock: new FormControl(false)
    });
  }
  setvalueform(values) {
    this.formdata.controls['FunctionCode'].setValue(values.FunctionCode);
    this.formdata.controls['FunctionName'].setValue(values.FunctionName);
    this.formdata.controls['Description'].setValue(values.Description);
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
          this._data.handleError(error); 
          this.isLoading = false;
        });
    }
    else {
      this.const_data = {};
    }
  }
  savedata(values) {
    if (this.formdata.invalid) { this._data.toastr_validator(); return; }
    this.issave = true;
    this.const_data.FunctionCode = values.FunctionCode;
    this.const_data.FunctionName = values.FunctionName;
    this.const_data.Description = values.Description;
    this.const_data.Lock = values.Lock;
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