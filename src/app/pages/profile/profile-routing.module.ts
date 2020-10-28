import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as _Profile from './profile-index';

const routes: Routes = [
  {
    "path": "",
    "component": _Profile.ProfileComponent,
    data: {
      title: 'Profile'
    },
    "children": [
      {
        "path": "my-profile",
        "component": _Profile.MyProfileComponent,
        data: {
            title: 'Thông tin của tôi'
        }
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
