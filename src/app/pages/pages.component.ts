import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from '../helpers';
import { ScriptLoaderService } from '../_services/script-loader.service';
import { Title } from '@angular/platform-browser';
import { SignalrService } from '../_services/signalr.service';
import { LoginService } from '../_services/login.service';
import { SystemConstants } from '../_common/SystemConstants';
declare let mApp: any;
declare let mUtil: any;
declare let mLayout: any;
@Component({
    selector: ".m-grid.m-grid--hor.m-grid--root.m-page",
    templateUrl: "./pages.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class PagesComponent implements OnInit {
    status_signalr: Boolean;
    constructor(private titleService: Title, private _script: ScriptLoaderService, private _router: Router ,
        private _signalr: SignalrService, private _login:LoginService) {
            this._login.load_appsetting();
    }
    ngOnInit() {
       
        this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js', 'assets/base/scripts.bundle.js'], true)
            .then(result => {
               // Helpers.setLoading(false);
            });
        this._router.events.subscribe((route) => {
            if (route instanceof NavigationStart) {
                (<any>mLayout).closeMobileAsideMenuOffcanvas();
                (<any>mLayout).closeMobileHorMenuOffcanvas();
                (<any>mApp).scrollTop();
               // Helpers.setLoading(true);
                // hide visible popover
                (<any>$('[data-toggle="m-popover"]')).popover('hide');
                
            }
            if (route instanceof NavigationEnd) {
                // init required js
                (<any>mApp).init();
                (<any>mUtil).init();
                //Helpers.setLoading(false);
                // content m-wrapper animation
                let animation = 'm-animate-fade-in-up';
                $('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
                    $('.m-wrapper').removeClass(animation);
                }).removeClass(animation).addClass(animation);
            }
        });
        this.status_signalr = this._signalr.connectionExists;
        this._signalr.connectionEstablished.subscribe(() => {
            this.status_signalr = true;
          });
    }
   
}