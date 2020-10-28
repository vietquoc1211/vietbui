import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as _DanhMuc from './khai-bao-danh-muc-index';
const routes: Routes = [
    {
        'path': '',
        'component': _DanhMuc.KhaiBaoDanhMucComponent,
        data: {
            title: 'Danh mục'
        },
        'children': [   
            {
                'path': 'khai-bao-loai-tu-van',
                'component': _DanhMuc.KhaiBaoLoaiTuVanComponent,
                data: {
                    title: 'Khai báo loại tư vấn'
                }
            },
            {
                'path': 'khai-bao-tu-van',
                'component': _DanhMuc.KhaiBaoTuVanComponent,
                data: {
                    title: 'Khai báo tư vấn'
                }
            },
            {
                'path': 'khai-bao-thong-so-mac-dinh',
                'component': _DanhMuc.KhaiBaoThongSoMacDinhComponent,
                data: {
                    title: 'Thông số mặc định'
                }
            },
            {
                'path': 'thong-so-mac-dinh-chi-tiet',
                'component': _DanhMuc.ThongSoMacDinhChiTietComponent,
                data: {
                    title: 'Thông số mặc định chi tiết'
                }
            },
            {
                'path': 'khai-bao-ngay-hen',
                'component': _DanhMuc.KhaiBaoNgayHenComponent,
                data: {
                    title: 'Danh mục ngày hẹn'
                }
            },
            {
                'path': 'khai-bao-gia-tri-tuy-chon',
                'component': _DanhMuc.GiaTriTuyChonComponent,
                data: {
                    title: 'Giá trị tuỳ chọn'
                }
            },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KhaiBaoDanhMucRoutingModule { }
