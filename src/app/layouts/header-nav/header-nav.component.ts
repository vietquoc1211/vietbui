import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { LoginService } from '../../_services/login.service';
import { Router, NavigationStart, NavigationEnd,NavigationCancel } from '@angular/router';
import { interval } from 'rxjs';
import { UrlConstants } from '../../_common/UrlConstants';
declare let mLayout: any;
@Component({
    selector: "app-header-nav",
    templateUrl: "./header-nav.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class HeaderNavComponent implements OnInit, AfterViewInit {
    public Profile: any = {};
    public URL: any;
    public show: boolean = false;
    private value: number = 0;
    constructor(private _Login: LoginService,
        private router: Router) {
            router.events.subscribe(event => {
                if (event instanceof NavigationStart) {
                    this.loading();
                }
                if (event instanceof NavigationEnd||event instanceof NavigationCancel) {
                    setTimeout(() => {
                        this.value = 100;
                    }, 50);
                }
            });
    }
    private loading() {
        this.value = 0;
        this.show = true;
        const source = interval(100);
        const subscribe = source
            .subscribe(val => {
                this.value < 40 ? (this.value += 10) :
                    this.value < 60 ? (this.value += 5) :
                        this.value < 80 ? (this.value += 2) :
                            this.value < 90 ? (this.value += 1) :
                                this.value < 95 ? (this.value += 0.2) : this.value += 0.1;
                if (this.value >= 100) {
                    subscribe.unsubscribe();
                    setTimeout(() => {
                        this.show = false;
                    }, 200);
                }
            });
    }
    ngOnInit() {
        this.Profile = this._Login.getLoggedInUser();
        this.URL = UrlConstants.BASE_API + '/img/profile/' + this.Profile.avatar;
    }
    logout() {
        this._Login.logout();
        this.router.navigate([UrlConstants.LOGIN], { queryParams: { returnUrl: this.router.url } });
    }
    ngAfterViewInit() {
        mLayout.initHeader();
    }
}
