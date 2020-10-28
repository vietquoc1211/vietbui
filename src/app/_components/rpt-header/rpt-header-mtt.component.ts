import { Component, Input, NgModule, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/_services/data.service';
import { UrlConstants } from 'src/app/_common/UrlConstants';
import { NgxBarcodeModule } from 'ngx-barcode';
@Component({
  selector: 'rpt-header-mtt',
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
  // <div id="print-head">
  //         <div class="print-logo">
  //           <img src="{{phongkham.LoGo}}">
  //         </div>
  //         <div class="print-head-content">
  //           <div class="syt">{{phongkham.SoYTe}}</div>
  //           <div class="tenphongkham">{{phongkham.TenPhongKham}}</div>
  //           <div>Địa chỉ: {{phongkham.DiaChi}}</div>
  //           <div >Điện thoại: {{phongkham.DienThoai}}</div>
  //         </div>
  //       </div>
  //       <div id="print-bottom" style=" font-style: italic;">
  //       <section class="rpt-footer-page" *ngIf="footer">
  //       <img src="../assets/media/img/logo/ehislogosmall.jpg">
  //       Design by SongAn Co.LTD: www.EHIS.VN</section>
  //     </div>
  // <div class="print-barcode">
  //           <div>
  //             <ngx-barcode [bc-width]="1" [bc-font-size]="13" [bc-margin-left]="0" [bc-margin-right]="0"
  //               [bc-text-position]="0" [bc-text-margin]="0" [bc-height]="35" 
  //               [bc-element-type]="'svg'" [bc-format]="'CODE128'" [bc-value]="MaBN" [bc-display-value]="false">
  //             </ngx-barcode>
  //           </div>
  //           <div class="mabn">Mã BN: {{MaBN}}</div>
  //         </div>
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
              text-align: center;
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
export class RPT_HeaderMTTComponent {
  @Input() MaBN: string = '';
  @Input() footer: boolean = true;
  @Output() DiaChiPK = new EventEmitter();
  public phongkham: any = {};
  constructor(private _data: DataService) {
    this._data.get('/api/PhieuKhaoSat/getthongtinphongkham').subscribe((res: any) => {
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
  declarations: [RPT_HeaderMTTComponent],
  exports: [RPT_HeaderMTTComponent]
})
export class RPT_HeaderMTTComponentModule { }
