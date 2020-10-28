import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { FooterComponent } from './footer/footer.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HrefPreventDefaultDirective } from '../_directives/href-prevent-default.directive';
import { btnloaderDirective } from '../_directives/btnloader';
import { UnwrapTagDirective } from '../_directives/unwrap-tag.directive';
import { LoaddingComponentModule } from '../_components/loadding/loadding.component';
import { TimeMaskDirective } from '../_directives/timeinput.directive';
import { DateMaskDirective } from '../_directives/dateinput.directive';
import { NumberMaskDirective } from '../_directives/numberinput.directive';
import { MaBenhNhanDirective } from '../_directives/mabenhnhan.directive';
import { NumberTransformModule } from '../_services/number.transform';
import { titleCaseTransformModule } from '../_services/titleCase.transform';
import { hostKeyDirective } from '../_directives/hotkey.directive';
import { SCrollDirective } from '../_directives/scroll.directive';
import { RPT_HeaderComponentModule } from '../_components/rpt-header/rpt-header.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import * as Material from "@angular/material";
import { DateAdapter, MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/_services/date.adapter.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RPT_HeaderMTTComponentModule } from '../_components/rpt-header/rpt-header-mtt.component';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';
@NgModule({
    declarations: [
        LayoutComponent,
        HeaderNavComponent,
        AsideNavComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        btnloaderDirective,
        UnwrapTagDirective,
        TimeMaskDirective,
        DateMaskDirective,
        MaBenhNhanDirective,
        NumberMaskDirective,
        hostKeyDirective,
        SCrollDirective,
    ],
    exports: [
        LayoutComponent,
        HeaderNavComponent,
        AsideNavComponent,
        FooterComponent,
        QuickSidebarComponent,
        ScrollTopComponent,
        TooltipsComponent,
        HrefPreventDefaultDirective,
        btnloaderDirective,
        LoaddingComponentModule,
        TimeMaskDirective,
        DateMaskDirective,
        MaBenhNhanDirective,
        NumberMaskDirective,
        NumberTransformModule,
        titleCaseTransformModule,
        RPT_HeaderComponentModule,
        RPT_HeaderMTTComponentModule,
        hostKeyDirective,
        SCrollDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxBarcodeModule,
        Material.MatDatepickerModule,
        Material.MatFormFieldModule,
        Material.MatInputModule,
        Material.MatProgressBarModule,
        Material.MatTabsModule,
        Material.MatCheckboxModule,
        Material.MatIconModule,
        Material.MatTreeModule,
        Material.MatRadioModule,
        Material.MatButtonModule,
        Material.MatProgressSpinnerModule,
        NumberTransformModule,
        titleCaseTransformModule,
        LoaddingComponentModule,
        RPT_HeaderComponentModule,
        RPT_HeaderMTTComponentModule,
        NgbPopoverModule,
        CurrencyMaskModule,
    ],
    providers: [
        { provide: DateAdapter, useClass: AppDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'vi-VN'},
      ]
})
export class LayoutModule {
}
