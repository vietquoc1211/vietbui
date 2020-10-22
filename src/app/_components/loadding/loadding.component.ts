import { Component,Input,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector:'loadding',
  template: `
  <div *ngIf="Load" class="m-page-loader m-page-loader--base m-page-loader--non-block" style="margin-left: -80px; margin-top: -20px;position: absolute;display: block; ma">
    <div class="m-blockui">
      <span>
        Đang tải...
      </span>
      <span>
        <div class="m-loader m-loader--brand"></div>
      </span>
    </div>
  </div>`
})
export class LoaddingComponent {
  @Input()Load:boolean=false;
  constructor() {
  }
}
@NgModule({
  imports:[CommonModule],
  declarations: [ LoaddingComponent ],
  exports: [ LoaddingComponent ]
})
export class LoaddingComponentModule {}