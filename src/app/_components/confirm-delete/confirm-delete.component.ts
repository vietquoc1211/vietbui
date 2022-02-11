import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  template: `
  <mat-dialog-content style="width:280px">
  <div class="swal2-icon swal2-warning swal2-animate-warning-icon" style="display: flex;"><span class="swal2-icon-text">!</span></div>
  <h4 class='text-center'>Do you want delete: ?</h4>
  <p class='text-center'>{{data.Title}}!</p>
  </mat-dialog-content>
  <mat-dialog-actions align="center">
    <button mat-raised-button mat-dialog-close>Cancel</button>
    <button mat-raised-button color="warn" [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
  </mat-dialog-actions> `
})
export class ConfirmDeleteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
}