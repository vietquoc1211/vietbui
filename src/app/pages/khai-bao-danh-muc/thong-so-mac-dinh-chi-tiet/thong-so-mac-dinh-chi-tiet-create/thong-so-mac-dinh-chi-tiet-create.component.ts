import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA, ErrorStateMatcher, MatInput } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  templateUrl: './thong-so-mac-dinh-chi-tiet-create.component.html',
})
export class ThongSoMacDinhChiTietCreateComponent implements OnInit {
  public isLoading = false;
  public issave = false;
  private API = '/api/ThongSoMacDinhChiTiet';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  private thongSoMacDinhChiTiet = [];
  public CtrlThongSoMacDinh: FormControl = new FormControl(null);
  public fnmapThongSoMacDinh: Function = (data) => { return data.map(o => { return { id: o.id, ma: o.ma, text: o.text } }) };
  @ViewChild('inputFocus') inputFocus: MatInput;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ThongSoMacDinhChiTietCreateComponent>,
    public _data: DataService
  ) {
    this.loaddata();

  }
  ngOnInit() {
    // if (!this.data.Id) {
    //   this.inputFocus.focus();
    // }
  }
  createform() {
    this.formdata = new FormGroup({
      ThongSoMacDinhID: new FormControl('', Validators.required),
      Key: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      GiaTri: new FormControl('')
    });
  }
  setvalueform(values) {
    this.const_data.ThongSoMacDinhID = values.ThongSoMacDinhID;
    this.formdata.controls['Key'].setValue(values.Key);
    this.formdata.controls['GiaTri'].setValue(values.GiaTri);
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
    } else {
      this.const_data = {};
      setTimeout(() => {
        this.const_data.ThongSoMacDinhID = this.data.ThongSoMacDinhID;
      }, 10);
    }
  }
  savedata(values) {
    if (this.formdata.invalid) { this._data.toastr_validator(); return; }
    this.issave = true;
    this.const_data.ThongSoMacDinhID = values.ThongSoMacDinhID.id;
    this.const_data.Key = values.Key;
    this.const_data.GiaTri = values.GiaTri;
    const isadd = isNullOrUndefined(this.data.Id);
    this._data.post(this.API + (isadd ? '/add' : '/update'), this.const_data)
      .subscribe((res: any) => {
        if (res.Loi) {
          this._data.toastr_duplicate_error();
          this.issave = false;
          return;
        }
        this.issave = false;
        this._data.toastr_save_success(isadd);
        // this.dialogRef.close(this.formdata.controls['ThongSoMacDinhID'].value);
        this.dialogRef.close(this.const_data.ThongSoMacDinhID);
      }, (error) => {
        this._data.handleError(error);
        this.issave = false;
      });
  }
  resetForm(form) {
    form.resetForm();
    this.const_data.ThongSoMacDinhID = null;
    this.loaddata();
  }
}
