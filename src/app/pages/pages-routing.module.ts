import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../_services/authguard.service';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './error/404/404.component';
import { Page406Component } from './error/406/406.component';

const routes: Routes = [
  {
    'path': '',
    'component': PagesComponent,
    'canActivate': [AuthGuardService],
    'children': [
      {
        'path': 'index',
        'loadChildren': '.\/default\/index.module#IndexModule'
      },
      {
        'path': 'admin',
        'loadChildren': '.\/admin\/admin.module#AdminModule'
      },
      {
        'path': 'khai-bao-danh-muc',
        'loadChildren': '.\/khai-bao-danh-muc\/khai-bao-danh-muc.module#KhaiBaoDanhMucModule'
      },
      {
        'path': 'profile',
        'loadChildren': '.\/profile\/profile.module#ProfileModule'
      },
      {
        'path': '',
        'redirectTo': 'index',
        'pathMatch': 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Đăng nhập'
    }
  },
  {
    path: 'page-404',
    component: Page404Component,
    data: {
      title: 'Không tìm thấy trang yêu cầu'
    }
  },
  {
    path: 'page-406',
    component: Page406Component,
    data: {
      title: 'Bạn bị giới hạn quyền truy cập'
    }
  },
  {
    'path': '**',
    'redirectTo': 'page-404',
    'pathMatch': 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
