import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import { DataService } from '../../../_services/data.service';
import { isNullOrUndefined } from 'util';

@Component({
  templateUrl: "./app-update-appsetting.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class AppUpdateAppSettingComponent {
  private API = '/api/UpdateAppSetting';
  issave: boolean = false;
  constructor(public _data: DataService) {

  }
  update() {
    this.issave = true;
    this._data.post(this.API +'/update')
      .subscribe((res: any) => {
        this.issave = false;
      }, (error) => {
        this._data.handleError(error);
        this.issave = false;
      });
  }
}