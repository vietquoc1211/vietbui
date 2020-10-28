import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../../layouts/layout.module';
import { ProfileRoutingModule } from './profile-routing.module';
import * as Material from "@angular/material";
import * as _Profile from "./profile-index";
import { CdkTreeModule } from '@angular/cdk/tree';
import { SelectCustomModule } from 'src/app/_components/select-custom/select-custom.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DialogService } from './profile-index';
import { _PaginatorIntl } from 'src/app/_services/paginator.service';
import { DateAdapter, MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/_services/date.adapter.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    ProfileRoutingModule,
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
    Material.MatAutocompleteModule,
    Material.MatListModule,
    Material.MatTabsModule,
    Material.MatStepperModule,
    Material.MatBottomSheetModule,
    Material.MatCardModule,
    Material.MatButtonModule,
    CdkTreeModule,
    SelectCustomModule,
    CurrencyMaskModule,
  ],
  declarations: [
    _Profile.ProfileComponent,
    _Profile.MyProfileComponent
  ],
  entryComponents: [],
  providers: [
    DialogService,
        { provide: Material.MatPaginatorIntl, useValue: _PaginatorIntl() },
        { provide: DateAdapter, useClass: AppDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
        { provide: MAT_DATE_LOCALE, useValue: 'vi-VN'},
  ]
})
export class ProfileModule { }
