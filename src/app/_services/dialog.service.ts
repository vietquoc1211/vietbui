import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteComponent } from '../_components/confirm-delete/confirm-delete.component';
import { ConfirmContinueComponent } from '../_components/confirm-continue/confirm-continue.component';
import { MatSnackBar } from '@angular/material';
declare var $: any;

@Injectable()
export class DialogService {
  constructor(private _dialog: MatDialog, private _snackbar: MatSnackBar) {

  }
  //#region dialog create
  open_dialog(entrycomponent: any, data: any, callback: any, callback_custom: boolean = false, backdropClass: string = '') {
    let dialogRef = this._dialog.open(entrycomponent,
      {
        data: data,
        backdropClass: backdropClass
      });
    if (!callback_custom)
      dialogRef.afterClosed().subscribe(result => {
        if (result)
          callback();
      });
    else
      dialogRef.afterClosed().subscribe(result => callback(result));
  }
  open_dialog_create(entrycomponent: any, data: any, callback: any, callback_custom: boolean = false) {
    let dialogRef = this._dialog.open(entrycomponent,
      {
        disableClose: true,
        data: data
      });
    if (!callback_custom)
      dialogRef.afterClosed().subscribe(result => {
        if (result)
          callback();
      });
    else
      dialogRef.afterClosed().subscribe(result => callback(result));
  }
  open_dialog_confirm_delete(data: any, callback: any) {
    let dialogRef = this._dialog.open(ConfirmDeleteComponent,
      {
        data: data
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        callback();
    });
  }
  open_dialog_confirm_continue(data: any, callback: any = null, callbackcancel: any = null) {
    let dialogRef = this._dialog.open(ConfirmContinueComponent,
      {
        data: data
      });
    dialogRef.afterClosed().subscribe(result => { 
      if (result == true) {
        if (callback)
          callback();
      }
      else {
        if (data.buttons) {
          data.buttons.forEach(item => {
            if (item.emitkey == result)
              if (item.callback)
                item.callback();
          });
        }
        if (result == 'cancel' && callbackcancel)
          callbackcancel();
      }
    });
  }
  openSnackBar_CanhBao(message: string) {
    this._snackbar.open(message, null, {
      duration: 3000,
      panelClass:'snackbar-canhbao'
    });
  }
  openSnackBar(message: string, action: string = null, option: any = null) {
    let opt = option || {};
    this._snackbar.open(message, action, opt);
  }
  //#endregion
}
