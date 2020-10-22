import { Component, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../_services/data.service';
import { UrlConstants } from '../../_commons/UrlConstants';
import { NgxBarcodeModule } from 'ngx-barcode';
@Component({
  selector: 'rpt-header',
  template: `
  <div id="print-head-mtt">
          <div class="print-logo">
            <img src="{{phongkham.LoGo}}">
          </div>
          <div class="print-head-content">
            <div class="margin_ tenphongkham">{{phongkham.TenPhongKham}}</div>
            <div class="margin_" style=" font-style: italic; font-size: 13px;">{{phongkham.DiaChi}}</div>
            <div class="margin_" style="font-size: 13px;">Tel: {{phongkham.DienThoai}}</div>
          </div>
        </div>
        <div id="print-bottom" style="font-style: italic;">
        <section class="rpt-footer-page" *ngIf="footer">
        <img src="../assets/media/img/logo/ehislogosmall.jpg">
        Design by SongAn Co.LTD: www.EHIS.VN</section>
      </div>
  `,
  styles: [`
            #print-head-mtt
            {
              position: relative;
              flex-wrap: wrap;
              display: flex;
              width: 100%;
            }
            #print-head-mtt .print-logo
            {
              flex: 0 0 250px;
              height: 75px !important;
              max-width: 250px !important;
              height: 75px;
              text-align: left;
            }
            #print-head-mtt .print-logo img
            {
              max-width: 100%;
              max-height: 100%;
            }
            #print-head-mtt .print-head-content
            {
              text-align: right;
              flex: 1;
            }
            #print-head-mtt .print-head-content .syt
            {
              text-transform: uppercase;
            }
            #print-head-mtt .print-head-content .tenphongkham
            {
              font-weight: bold;
              font-size: 13px;
            }
            #print-head-mtt .print-head-content .margin_ {
              margin-bottom: 3px;
            }
            #print-bottom
            {
              position: absolute;
              bottom: 20px;
              font-size: 11px;
              font-style: italic;
            }
            #print-bottom img{
              height: 14px;
              }
  `]
})
export class RPT_HeaderComponent {
  @Input() MaBN: string = '';
  @Input() footer: boolean = true;
  @Output() DiaChiPK = new EventEmitter();
  public phongkham: any = {};
  constructor(private _data: DataService) {
    this._data.get('/api/thongtinphongkham/getthongtinphongkham').subscribe((res: any) => {
      this.phongkham = res;
      let split = this.phongkham.DiaChi.split(',');
      this.DiaChiPK.emit(split.pop());
      if (this.phongkham.LoGo.slice(10) === '') {
        this.phongkham.LoGo = '../../../assets/app/media/img/img-defalut/logo.jpg';
      } else {
        if (this.phongkham && this.phongkham.LoGo)
          this.phongkham.LoGo = UrlConstants.BASE_API + this.phongkham.LoGo + '?=time=' + new Date();
      }
    });
  }
}
@NgModule({
  imports: [CommonModule, NgxBarcodeModule],
  declarations: [RPT_HeaderComponent],
  exports: [RPT_HeaderComponent]
})
export class RPT_HeaderComponentModule { }
