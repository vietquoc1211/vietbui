import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from '../../layouts/layout.module';
import { DefaultComponent } from './default.component';
import { IndexComponent } from './index/index.component';
import * as _Material from '@angular/material';
const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": IndexComponent,
                data: {
                    title: 'Trang chủ'
                }
            },
            
        ]
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes), LayoutModule,
        _Material.MatCardModule,
        _Material.MatDividerModule,
        _Material.MatButtonModule,
        _Material.MatIconModule
    ], exports: [
        RouterModule
    ], declarations: [
        DefaultComponent,
        IndexComponent
    ]
})
export class IndexModule {



}