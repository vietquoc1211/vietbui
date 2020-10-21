// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Core Module
import { CoreModule } from '../../core/core.module';
import { MyPageComponent } from './my-page.component';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: MyPageComponent
			},
		]),
	],
	providers: [],
	declarations: [
		MyPageComponent,
	]
})
export class MyPageModule {
}
