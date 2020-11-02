import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as _DanhMuc from './danh-muc-index';
const routes: Routes = [
    {
        'path': '',
        'component': _DanhMuc.DanhMucComponent,
        data: {
            title: 'Danh mục'
        },
        'children': [
            {
                'path': 'dan-toc',
                'component': _DanhMuc.DanTocComponent,
                data: {
                    title: 'Dân tộc'
                }
            },
            {
                'path': 'tinh-thanh',
                'component': _DanhMuc.TinhThanhComponent,
                data: {
                    title: 'Tỉnh thành'
                }
            },
            {
                'path': 'quan-huyen',
                'component': _DanhMuc.QuanHuyenComponent,
                data: {
                    title: 'Quận huyện'
                }
            },
            {
                'path': 'xa-phuong',
                'component': _DanhMuc.XaPhuongComponent,
                data: {
                    title: 'Xã phường'
                }
            },
            {
                'path': 'ton-giao',
                'component': _DanhMuc.TonGiaoComponent,
                data: {
                    title: 'Tôn giáo'
                }
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DanhMucRoutingModule { }
