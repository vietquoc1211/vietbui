import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { UrlConstants } from '../../_common/UrlConstants';
import { SystemConstants } from '../../_common/SystemConstants';
import { ValidatorConstants } from '../../_common/ValidatorConstants';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../_services/login.service';
import { ValidationService } from '../../_services/validation.service';
import { Helpers } from '../../helpers';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
    selector: '.m-grid.m-grid--hor.m-grid--root.m-page',
    templateUrl: "./login.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, AfterViewInit {
    login_fr: FormGroup;
    vali = ValidatorConstants;
    load: boolean = false;
    returnUrl: string;
    login_ms: string = '';
    constructor(
        private titleService: Title, private activated: ActivatedRoute,
        private router: Router, private validation: ValidationService,
        private _Login: LoginService, private fb: FormBuilder
    ) {
        this.login_fr = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.pattern(this.vali.v_username)]),
            password: new FormControl('', [Validators.required]),
            remember: new FormControl(true)
        });
        this.titleService.setTitle('Đăng nhập');
        this.returnUrl = this.activated.snapshot.queryParams['returnUrl'] || '/';
        if (!isNullOrUndefined(localStorage.getItem(SystemConstants.CURRENTUSER))) {
            if (this.returnUrl && this.returnUrl.length > 0) {
                let url = this.sortParams(this.returnUrl)
                this.router.navigate([url.path], { queryParams: url.params });
            }
            else
                this.router.navigate([UrlConstants.HOME]);
        }
        if (localStorage.getItem(SystemConstants.REMEMBERME) !== null)
            this.login_fr.controls['username'].setValue(localStorage.getItem(SystemConstants.REMEMBERME));
    }
    ngOnInit() {
    }
    login(form_data) {
        if (this.login_fr.invalid)
            return;
        this.load = true;
        if (form_data.remember === true)
            localStorage.setItem(SystemConstants.REMEMBERME, form_data.username);
        else
            localStorage.removeItem(SystemConstants.REMEMBERME);
        this._Login.login(form_data.username, form_data.password)
            .subscribe(
                data => {
                    let user = data;
                    if (user && user.token) {
                        localStorage.setItem(SystemConstants.CURRENTUSER, JSON.stringify(user));
                    }
                    let url = this.sortParams(this.returnUrl)
                    this.router.navigate([url.path], { queryParams: url.params });
                    this.login_ms = '';
                },
                error => {
                    if (error.status == 400) {
                        let errMsg = error.error.error;
                        if (errMsg != '') {
                            this.login_ms = errMsg;
                        }
                        else {
                            this.login_ms = 'Tên đăng nhập hoặc mật khẩu không đúng!';
                        }
                    }
                    else {
                        this.login_ms = 'Tên đăng nhập hoặc mật khẩu không đúng!';
                    }
                    this.load = false;
                });
    }
    ngAfterViewInit() {
        Helpers.bodyClass('m-content--skin- m-header--static');
        Helpers.removeloadingpage();
    }
    sortParams(url: string): any {
        const _url = url.split('?')[0];
        let queryParams = url.split('?')[1] || '';
        let params = queryParams.split('&');
        let pair = null;
        let data = {};
        params.forEach((d) => {
            pair = d.split('=');
            data[`${pair[0]}`] = pair[1];
        });
        return { path: _url, params: data };
    }
}
