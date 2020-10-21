import { NgxPermissionsModule } from 'ngx-permissions';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Angular Material
import { MatButtonModule, MatProgressBarModule, MatTabsModule, MatTooltipModule } from '@angular/material';
// NgBootstrap
import { NgbProgressbarModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// Translation
import { TranslateModule } from '@ngx-translate/core';
// Loading bar
import { LoadingBarModule } from '@ngx-loading-bar/core';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Ngx DatePicker
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// SVG inline
import { InlineSVGModule } from 'ng-inline-svg';
// Core Module
import { CoreModule } from '../core/core.module';
import { HeaderComponent } from './header/header.component';
import { AsideLeftComponent } from './aside/aside-left.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { BrandComponent } from './brand/brand.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { MenuHorizontalComponent } from './header/menu-horizontal/menu-horizontal.component';
import { BaseComponent } from './base/base.component';
import { PagesModule } from '../pages/pages.module';
import { HtmlClassService } from './html-class.service';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { ErrorPageComponent } from './content/error-page/error-page.component';
import { PermissionEffects, permissionsReducer, RoleEffects, rolesReducer } from '../core/auth';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import {  CartComponent } from './topbar/cart/cart.component';
import { LanguageSelectorComponent } from './topbar/language-selector/language-selector.component';
import { NotificationComponent}  from './topbar/notification/notification.component';
import { QuickActionComponent } from './topbar/quick-action/quick-action.component';
import { SearchDefaultComponent } from './topbar/search-default/search-default.component';
import { SearchDropdownComponent } from './topbar/search-dropdown/search-dropdown.component';
import { UserProfileComponent } from './topbar/user-profile/user-profile.component';

@NgModule({
	declarations: [
		BaseComponent,
		FooterComponent,
		HeaderComponent,
		BrandComponent,
		HeaderMobileComponent,
		SubheaderComponent,
		TopbarComponent,
		AsideLeftComponent,
		MenuHorizontalComponent,
		ErrorPageComponent,
		ScrollTopComponent,
		SearchResultComponent,
		SplashScreenComponent,
		CartComponent,
		LanguageSelectorComponent,
		NotificationComponent,
		QuickActionComponent,
		SearchDefaultComponent,
		SearchDropdownComponent,
		UserProfileComponent
	],
	exports: [
		BaseComponent,
		FooterComponent,
		HeaderComponent,
		BrandComponent,
		HeaderMobileComponent,
		SubheaderComponent,
		TopbarComponent,
		AsideLeftComponent,
		MenuHorizontalComponent,
		ErrorPageComponent,
		ScrollTopComponent,
		SearchResultComponent,
		SplashScreenComponent,
		CartComponent,
		LanguageSelectorComponent,
		NotificationComponent,
		QuickActionComponent,
		SearchDefaultComponent,
		SearchDropdownComponent,
		UserProfileComponent
	],
	providers: [
		HtmlClassService,
	],
	imports: [
		CommonModule,
		RouterModule,
		NgxPermissionsModule.forChild(),
		StoreModule.forFeature('roles', rolesReducer),
		StoreModule.forFeature('permissions', permissionsReducer),
		EffectsModule.forFeature([PermissionEffects, RoleEffects]),
		PagesModule,
		CoreModule,
		PerfectScrollbarModule,
		FormsModule,
		MatProgressBarModule,
		MatTabsModule,
		MatButtonModule,
		MatTooltipModule,
		TranslateModule.forChild(),
		LoadingBarModule,
		NgxDaterangepickerMd,
		InlineSVGModule,
		NgbProgressbarModule,
		NgbTooltipModule,
	]
})
export class ThemeModule {
}
