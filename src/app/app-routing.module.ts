// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {BaseComponent} from './views/theme/base/base.component';
import {ErrorPageComponent} from './views/theme/content/error-page/error-page.component';
// Auth
import {AuthGuard} from './core/auth';

const routes: Routes = [
	{ path: 'auth',
	  loadChildren: 'app/views/pages/auth/auth.module#AuthModule' },
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: 'app/views/pages/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'mail',
				loadChildren: 'app/views/pages/apps/mail/mail.module#MailModule'
			},
			{
				path: 'ecommerce',
				loadChildren: 'app/views/pages/apps/e-commerce/e-commerce.module#ECommerceModule'
			},
			{
				path: 'ngbootstrap',
				loadChildren: 'app/views/pages/ngbootstrap/ngbootstrap.module#NgbootstrapModule'
			},
			{
				path: 'material',
				loadChildren: 'app/views/pages/material/material.module#MaterialModule'
			},
			{
				path: 'user-management',
				loadChildren: 'app/views/pages/user-management/user-management.module#UserManagementModule'
			},
			{
				path: 'wizard',
				loadChildren: 'app/views/pages/wizard/wizard.module#WizardModule'
			},
			{
				path: 'builder',
				loadChildren: 'app/views/pages/builder/builder.module#BuilderModule'
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					type: 'error-v6',
					code: 403,
					title: '403... Access forbidden',
					desc: 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator',
				},
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
		],
	},

	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
