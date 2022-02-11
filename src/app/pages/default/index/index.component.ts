import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { SystemConstants } from 'src/app/_common/SystemConstants';


@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit, AfterViewInit {

    private API = '/api/AppRoleFunction/';
    private sys_const = SystemConstants;
    public data_index = [];
    constructor(public _data: DataService) {
        this.loaddata();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {

    }
    loaddata() {
        this._data.get(this.API + 'getmenupage')
            .subscribe((res: any) => {
                // this.sys_const.dashboard.forEach(item => {
                //     res.forEach(element => {
                //         if (item.url == element.Url)
                //             this.data_index.push(item);
                //     });
                // });
            });
    }

}