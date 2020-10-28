import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../layouts/layout.module';
import { AdminRoutingModule } from './admin-routing.module';
import { _PaginatorIntl } from '../../_services/paginator.service'
import { DialogService } from '../../_services/dialog.service'
import * as Material from "@angular/material";
import * as _Admin from "./admin-index";
import { CdkTreeModule } from '@angular/cdk/tree';
import { SelectCustomModule } from '../../_components/select-custom/select-custom.module';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../_services/date.adapter.service'
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        AdminRoutingModule,
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
        CdkTreeModule,
        SelectCustomModule
    ], declarations: [
        _Admin.AdminComponent,
        _Admin.AppRoleComponent,
        _Admin.AppRoleCreateComponent,
        _Admin.AppFunctionComponent,
        _Admin.AppFunctionCreateComponent,
        _Admin.AppPageComponent,
        _Admin.AppPageCreateComponent,
        _Admin.AppSetRoleComponent,
        _Admin.ThongSoHeThongComponent,
        _Admin.ThongSoHeThongCreateComponent,
        _Admin.AppUserComponent,
        _Admin.AppUserCreateComponent,
        _Admin.AppUpdateAppSettingComponent,
    ],
    entryComponents: [
        _Admin.AppRoleCreateComponent,
        _Admin.AppFunctionCreateComponent,
        _Admin.AppPageCreateComponent,
        _Admin.ThongSoHeThongCreateComponent,
        _Admin.AppUserCreateComponent,
    ],
    providers: [
        DialogService,
        { provide: Material.MatPaginatorIntl, useValue: _PaginatorIntl() },
        { provide: DateAdapter, useClass: AppDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
    ]
})
export class AdminModule {
}
