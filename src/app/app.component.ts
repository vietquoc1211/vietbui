import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Helpers } from "./helpers";
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Client';
  progress_bar = true;
  globalBodyClass = 'm-page--fluid m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default';
  globalBodyClass_minsize = 'm-page--fluid m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default m-brand--minimize m-aside-left--minimize';
  constructor(private titleService: Title, private _router: Router) {
  }
  ngOnInit() {
    this._router.events.subscribe((route) => {
      if (route instanceof NavigationStart) {
        var Elements = document.getElementsByClassName('m-brand--minimize m-aside-left--minimize');
        if (Elements.length > 0) {
          Helpers.bodyClass(this.globalBodyClass_minsize);
        } else {
          Helpers.bodyClass(this.globalBodyClass);
        }
        this.progress_bar = true;
      }
      if (route instanceof NavigationEnd) {
        Helpers.removeloadingpage();
        var title = this.getTitle(this._router.routerState, this._router.routerState.root).join('-');
        this.titleService.setTitle(title);
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
