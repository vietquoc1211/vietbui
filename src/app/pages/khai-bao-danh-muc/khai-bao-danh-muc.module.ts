import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../layouts/layout.module';
import { KhaiBaoDanhMucRoutingModule } from './khai-bao-danh-muc-routing.module';
import { _PaginatorIntl } from '../../_services/paginator.service';
import { DialogService } from '../../_services/dialog.service';
import * as Material from '@angular/material';
import * as _DanhMuc from './khai-bao-danh-muc-index';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ScrollDispatchModule, ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SelectCustomModule } from 'src/app/_components/select-custom/select-custom.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../_services/date.adapter.service'
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        CurrencyMaskModule,
        SelectCustomModule,
        ScrollDispatchModule,
        FlexLayoutModule,
        NgxMatSelectSearchModule,
        KhaiBaoDanhMucRoutingModule,
        Material.MatToolbarModule,
        Material.MatGridListModule,
        Material.MatFormFieldModule,
        Material.MatInputModule,
        Material.MatRadioModule,
        Material.MatSelectModule,
        Material.MatCheckboxModule,
        Material.MatDatepickerModule,
        Material.MatNativeDateModule,
        Material.MatButtonModule,
        Material.MatProgressSpinnerModule,
        Material.MatDialogModule,
        Material.MatTableModule,
        Material.MatPaginatorModule,
        Material.MatSortModule,
        Material.MatSelectModule,
        Material.MatTreeModule,
        Material.MatIconModule,
        Material.MatMenuModule,
        Material.MatTooltipModule,
        Material.MatTabsModule,
        Material.MatDividerModule,
        Material.MatAutocompleteModule,
        Material.MatChipsModule,
        CdkTreeModule,
        DragDropModule
    ], declarations: [
        _DanhMuc.KhaiBaoDanhMucComponent,
        _DanhMuc.KhaiBaoLoaiTuVanComponent,
        _DanhMuc.KhaiBaoLoaiTuVanCreateComponent,
        _DanhMuc.KhaiBaoTuVanComponent,
        _DanhMuc.KhaiBaoTuVanCreateComponent,
        _DanhMuc.KhaiBaoThongSoMacDinhComponent,
        _DanhMuc.KhaiBaoThongSoMacDinhCreateComponent,
        _DanhMuc.ThongSoMacDinhChiTietComponent,
        _DanhMuc.ThongSoMacDinhChiTietCreateComponent,
        _DanhMuc.KhaiBaoNgayHenComponent, 
        _DanhMuc.KhaiBaoNgayHenCreateComponent,
        _DanhMuc.KhaiBaoNgayHenCreateComponent,
        _DanhMuc.GiaTriTuyChonCreateComponent,
        _DanhMuc.GiaTriTuyChonComponent,
    ],
    entryComponents: [
        _DanhMuc.KhaiBaoLoaiTuVanCreateComponent,
        _DanhMuc.KhaiBaoTuVanCreateComponent,
        _DanhMuc.ThongSoMacDinhChiTietCreateComponent,
        _DanhMuc.KhaiBaoThongSoMacDinhCreateComponent,
        _DanhMuc.KhaiBaoNgayHenCreateComponent,
        _DanhMuc.GiaTriTuyChonCreateComponent,
    ],
    providers: [

        DialogService,
        { provide: Material.MatPaginatorIntl, useValue: _PaginatorIntl() },
        { provide: DateAdapter, useClass: AppDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'vi-VN'},
    ]
})
export class KhaiBaoDanhMucModule {
}
