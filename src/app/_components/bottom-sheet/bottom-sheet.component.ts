import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
@Component({
  template: `
  <p *ngIf="data&&data.title">
 <strong>  {{data.title}}</strong>
  </p>
  <p class="mota-pre_">
  {{data.content}}
  </p>`
})
export class BottomSheetComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }
}