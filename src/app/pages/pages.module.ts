// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Pages
import { CoreModule } from '../core/core.module';
import { MyPageComponent } from './my-page/my-page.component';

@NgModule({
	declarations: [MyPageComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
	],
	providers: []
})
export class PagesModule {
}
