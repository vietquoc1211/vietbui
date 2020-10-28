import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UrlConstants } from '../_common/UrlConstants';
import { SystemConstants } from '../_common/SystemConstants';
import { isNullOrUndefined } from 'util';
@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!isNullOrUndefined(localStorage.getItem(SystemConstants.CURRENTUSER))) {
            return true;
        }
        else {
            this.router.navigate([UrlConstants.LOGIN], { queryParams: { returnUrl: state.url } });
            return false;
        }
    }
}
