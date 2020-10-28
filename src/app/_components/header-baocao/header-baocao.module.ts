import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Material from "@angular/material";
import { DateAdapter, MAT_DATE_FORMATS,MAT_DATE_LOCALE } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from 'src/app/_services/date.adapter.service';
import { HeaderBaoCaoComponent } from './header-baocao.component';
import { HeaderBaoCaoMonthComponent } from './components/header-baocao-month/header-baocao-month.component';
import { HeaderBaoCaoYearComponent } from './components/header-baocao-year/header-baocao-year.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatDatepickerModule,
  ],
  declarations: [
    HeaderBaoCaoComponent,
    HeaderBaoCaoMonthComponent,
    HeaderBaoCaoYearComponent,
  ],
  exports:[
    HeaderBaoCaoComponent,
    HeaderBaoCaoMonthComponent,
    HeaderBaoCaoYearComponent
  ],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'vi-VN'},
  ]
})
export class HearBaoCaoModule { }
