import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PagesComponent} from './pages/pages.component';
import {LayoutModule} from './layouts/layout.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ScriptLoaderService} from './_services/script-loader.service';
import {PagesRoutingModule} from './pages/pages-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {Page404Component} from './pages/error/404/404.component';
import {Page406Component} from './pages/error/406/406.component';
import {ToastrModule} from 'ngx-toastr';
import {LoginService} from './_services/login.service';
import {AuthGuardService} from './_services/authguard.service';
import {ValidationService} from './_services/validation.service';
import {DataService} from './_services/data.service';
import {DateTimeService} from './_services/datetime.service';
import {NumberService} from './_services/number.service';
import {ExcelService} from './_services/excel.service';
import {ConfirmDeleteComponent} from './_components/confirm-delete/confirm-delete.component';
import {ConfirmContinueComponent} from './_components/confirm-continue/confirm-continue.component';
import {BottomSheetComponent} from './_components/bottom-sheet/bottom-sheet.component';
import * as Material from '@angular/material';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import {DialogService} from './_services/dialog.service';
import {PrintService} from './_services/print.service';
import {SignalrService} from './_services/signalr.service';
import {SelectCustomModule} from './_components/select-custom/select-custom.module';

@NgModule({
  declarations: [
    PagesComponent,
    AppComponent,
    LoginComponent,
    Page404Component,
    Page406Component,
    ConfirmDeleteComponent,
    ConfirmContinueComponent,
    BottomSheetComponent
  ],
  imports: [
    NgxMatSelectSearchModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SelectCustomModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule,
    Material.MatProgressBarModule,
    Material.MatDialogModule,
    Material.MatSnackBarModule,
    Material.MatTooltipModule,
    Material.MatDatepickerModule,
    Material.MatAutocompleteModule,
    Material.MatStepperModule,
    Material.MatRadioModule,
    Material.MatProgressSpinnerModule,
    Material.MatCardModule,
    Material.MatIconModule
  ],
  entryComponents: [
    ConfirmDeleteComponent,
    ConfirmContinueComponent,
    BottomSheetComponent,
  ],
  providers: [
    LoginService,
    AuthGuardService,
    ValidationService,
    DataService,
    ScriptLoaderService,
    DateTimeService,
    DialogService,
    PrintService,
    SignalrService,
    NumberService,
    ExcelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
