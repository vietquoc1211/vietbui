import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../../_services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ValidatorConstants } from '../../../../_common/ValidatorConstants';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MatDialogRef } from '@angular/material';
@Component({
  templateUrl: "./app-page-create.component.html",
})
export class AppPageCreateComponent implements OnInit {
  public isLoading: boolean = false;
  public issave: boolean = false;
  private API = '/api/AppPage';
  public formdata: FormGroup;
  private vali_const = ValidatorConstants;
  public const_data: any = {};
  public parent: any = {};
  @ViewChild('vcChucNang') vcChucNang;
  chucnang = new FormControl();
  chucnanglist: any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppPageCreateComponent>,
    public _data: DataService
  ) {
    this.loadchucnang();
  }
  ngOnInit() {
    this.loaddata();
  }
  createform() {
    this.formdata = new FormGroup({
      Url: new FormControl('', [Validators.pattern('^[0-9A-Za-z@:%_\+.~#?&//=-]{3,250}$')]),
      Name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(250)]),
      Icon: new FormControl('', [Validators.maxLength(128)]),
      Hide: new FormControl(false),
      Section: new FormControl(false)
    });
  }
  setvalueform(values) {
    //this.chucnang.setValue(values.AppPageFunctions.map(s => s.AppFunctionID));
    this.vcChucNang.setValue(values.AppPageFunctions.map(s => s.AppFunctionID));
    this.formdata.controls['Name'].setValue(values.Name);
    this.formdata.controls['Url'].setValue(values.Url);
    this.formdata.controls['Icon'].setValue(values.Icon);
    this.formdata.controls['Hide'].setValue(values.Hide);
    this.formdata.controls['Section'].setValue(values.Section);
  }
  loaddata() {
    this.createform();
    if (!isNullOrUndefined(this.data.Parent)) {
      this.parent = this.data.Parent;
    }
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
    if (!isNullOrUndefined(this.parent.AppPageID))
      this.const_data.Parent = this.parent.AppPageID;
    this.const_data.AppPageFunctions = [];
    if (this.chucnang.value && this.chucnang.value.length > 0)
      this.chucnang.value.forEach((item: any) => {
        this.const_data.AppPageFunctions.push({ AppPageID: this.const_data.AppPageID, AppFunctionID: item.id });
      });
    this.const_data.Icon = values.Icon;
    this.const_data.Name = values.Name;
    this.const_data.Url = values.Url;
    this.const_data.Hide = values.Hide;
    this.const_data.Section = values.Section;
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
  loadchucnang() {
    this._data.get('/api/appfunction/getallactive/')
      .subscribe((res: any) => {
        this.chucnanglist = res.map(s => ({
          id: s.AppFunctionID,
          code: s.FunctionCode,
          text: s.FunctionName,
        }));
      }, (error) => {
        this._data.handleError(error); this.isLoading = false;
      });
  }
}