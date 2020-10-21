// Angular
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {BaseComponent} from './theme/base/base.component';
import {ErrorPageComponent} from './theme/content/error-page/error-page.component';
// Auth
import {AuthGuard} from './core/auth';

const routes: Routes = [
	{path: 'auth',
	'loadChildren': 'app\/pages\/auth\/auth.module#AuthModule'},
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'dashboard',
				'loadChildren': 'app\/pages\/dashboard\/dashboard.module#DashboardModule'
			},
			{
				path: 'my-page',
				'loadChildren': 'app\/pages\/my-page\/my-page.module#MyPageModule'
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
