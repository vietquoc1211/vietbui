import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA, ErrorStateMatcher, MatInput } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
export class MyErrorStateMatcherQuanHuyen implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  templateUrl: "./quan-huyen-create.component.html",
})
export class QuanHuyenCreateComponent implements OnInit {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/api/DMQuanHuyen';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  private tinhThanh = [];
  matcher = new MyErrorStateMatcherQuanHuyen();
  @ViewChild('inputFocus') inputFocus: MatInput;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<QuanHuyenCreateComponent>,
    public _data: DataService
  ) {
    this.loaddata();

  }
  ngOnInit() {
    if (!this.data.Id) {
      this.inputFocus.focus();
    }
  }
  createform() {
    this.formdata = new FormGroup({
      MaQuanHuyen: new FormControl('', [Validators.required, Validators.maxLength(128)]),
      MaTT: new FormControl(this.data.MaTT, [Validators.required, Validators.maxLength(128)]),
      TenQuanHuyen: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      Lock: new FormControl(false)
    });

    // this.formdata.controls['MaTT'].disable();
  }
  setvalueform(values) {
    this.formdata.controls['MaTT'].setValue(values.MaTT);
    this.formdata.controls['MaQuanHuyen'].setValue(values.MaQuanHuyen);
    this.formdata.controls['TenQuanHuyen'].setValue(values.TenQuanHuyen);
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
    this.const_data.MaTT = values.MaTT;
    this.const_data.MaQuanHuyen = values.MaQuanHuyen;
    this.const_data.TenQuanHuyen = values.TenQuanHuyen;
    this.const_data.Lock = values.Lock;
    let isadd = isNullOrUndefined(this.data.Id);
    this._data.post(this.API + (isadd ? '/add' : '/update?maqh=' + this.data.Id), this.const_data)
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
