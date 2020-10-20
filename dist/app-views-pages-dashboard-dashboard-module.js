(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-6\">\n\t\t<div class=\"row row-full-height\">\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6\">\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\n\t\t\t\t\t\t<kt-widget26 [value]=\"570\" [desc]=\"'Total Sales'\" [options]=\"chartOptions1\"></kt-widget26>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\n\t\t\t\t<div class=\"kt-space-20\"></div>\n\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\n\t\t\t\t\t\t<kt-widget26 [value]=\"640\" [desc]=\"'Completed Transactions'\" [options]=\"chartOptions2\"></kt-widget26>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-6\">\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\n\t\t\t\t\t\t<kt-widget26 [value]=\"'234+'\" [desc]=\"'Transactions'\" [options]=\"chartOptions3\"></kt-widget26>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\n\t\t\t\t<div class=\"kt-space-20\"></div>\n\n\t\t\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\n\t\t\t\t\t\t<kt-widget26 [value]=\"'4.4M$'\" [desc]=\"'Paid Comissions'\" [options]=\"chartOptions4\"></kt-widget26>\n\t\t\t\t\t</kt-portlet-body>\n\t\t\t\t</kt-portlet>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-xl-6\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Order Statistics'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget12></kt-widget12>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<kt-portlet>\n\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\t\t<div class=\"row row-no-padding row-col-separator-xl\">\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget1></kt-widget1>\n\t\t\t</div>\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget14 [title]=\"'Daily Sales'\" [desc]=\"'Check out each collumn for more details'\"></kt-widget14>\n\t\t\t</div>\n\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t<kt-widget14 [title]=\"'Revenue Change'\" [desc]=\"'Revenue change breakdown by cities'\"></kt-widget14>\n\t\t\t</div>\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Download Files'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_1\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<div class=\"kt-widget4__tools\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">\n\t\t\t\t\t\t\t\t<i class=\"flaticon2-download-symbol-of-down-arrow-in-a-rectangle\"></i>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'New Users'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_2\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm\" [ngClass]=\"item.buttonClass\">Follow</a>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Latest Updates'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_3\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-8\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Exclusive Datatable'\" [class]=\"'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu></kt-context-menu>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\n\t\t\t\t<kt-data-table></kt-data-table>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Authors Profit'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget4 [data]=\"widget4_4\">\n\t\t\t\t\t<ng-template #actionTemplate let-item=\"item\">\n\t\t\t\t\t\t<span class=\"kt-widget4__number\" [ngClass]=\"item.valueColor\">{{item.value}}</span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</kt-widget4>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<div class=\"row\">\n\t<div class=\"col-xl-8\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Best Sellers'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-widget5></kt-widget5>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-4\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Recent Activities'\">\n\t\t\t\t<ng-container ktPortletTools>\n\t\t\t\t\t<kt-context-menu2></kt-context-menu2>\n\t\t\t\t</ng-container>\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\t\t\t\t<kt-timeline2></kt-timeline2>\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n\n\n<!--\n<kt-portlet>\n\t<kt-portlet-header>\n\t\t<ng-container ktPortletTitle>\n\t\t</ng-container>\n\t\t<ng-container ktPortletTools>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<kt-portlet-body></kt-portlet-body>\n\t<kt-portlet-footer></kt-portlet-footer>\n</kt-portlet>\n-->\n"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL0Q6XFxNeVNvdXJjZVxcdmlldGJ1aS9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdHLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdDo6bmctZGVlcCB7XG5cdFx0bmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");

// Angular

// Lodash

// Services
// Widgets model

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.chartOptions1 = {
            data: [10, 14, 18, 11, 9, 12, 14, 17, 18, 14],
            color: this.layoutConfigService.getConfig('colors.state.brand'),
            border: 3
        };
        this.chartOptions2 = {
            data: [11, 12, 18, 13, 11, 12, 15, 13, 19, 15],
            color: this.layoutConfigService.getConfig('colors.state.danger'),
            border: 3
        };
        this.chartOptions3 = {
            data: [12, 12, 18, 11, 15, 12, 13, 16, 11, 18],
            color: this.layoutConfigService.getConfig('colors.state.success'),
            border: 3
        };
        this.chartOptions4 = {
            data: [11, 9, 13, 18, 13, 15, 14, 13, 18, 15],
            color: this.layoutConfigService.getConfig('colors.state.primary'),
            border: 3
        };
        // @ts-ignore
        this.widget4_1 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/files/doc.svg',
                title: 'Metronic Documentation',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/jpg.svg',
                title: 'Project Launch Evgent',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Full Developer Manual For 4.7',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/javascript.svg',
                title: 'Make JS Development',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/zip.svg',
                title: 'Download Ziped version OF 5.0',
                url: 'https://keenthemes.com.my/metronic',
            }, {
                pic: './assets/media/files/pdf.svg',
                title: 'Finance Report 2016/2017',
                url: 'https://keenthemes.com.my/metronic',
            },
        ]);
        // @ts-ignore
        this.widget4_2 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/users/100_4.jpg',
                username: 'Anna Strong',
                desc: 'Visual Designer,Google Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-brand'
            }, {
                pic: './assets/media/users/100_14.jpg',
                username: 'Milano Esco',
                desc: 'Product Designer, Apple Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-warning'
            }, {
                pic: './assets/media/users/100_11.jpg',
                username: 'Nick Bold',
                desc: 'Web Developer, Facebook Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-danger'
            }, {
                pic: './assets/media/users/100_1.jpg',
                username: 'Wilter Delton',
                desc: 'Project Manager, Amazon Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-success'
            }, {
                pic: './assets/media/users/100_5.jpg',
                username: 'Nick Stone',
                desc: 'Visual Designer, Github Inc.',
                url: 'https://keenthemes.com.my/metronic',
                buttonClass: 'btn-label-dark'
            },
        ]);
        // @ts-ignore
        this.widget4_3 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                icon: 'flaticon-pie-chart-1 kt-font-info',
                title: 'Metronic v6 has been arrived!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$500',
                valueColor: 'kt-font-info'
            }, {
                icon: 'flaticon-safe-shield-protection kt-font-success',
                title: 'Metronic community meet-up 2019 in Rome.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1260',
                valueColor: 'kt-font-success'
            }, {
                icon: 'flaticon2-line-chart kt-font-danger',
                title: 'Metronic Angular 8 version will be landing soon..',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$1080',
                valueColor: 'kt-font-danger'
            }, {
                icon: 'flaticon2-pie-chart-1 kt-font-primary',
                title: 'ale! Purchase Metronic at 70% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-primary'
            }, {
                icon: 'flaticon2-rocket kt-font-brand',
                title: 'Metronic VueJS version is in progress. Stay tuned!',
                url: 'https://keenthemes.com.my/metronic',
                value: '+134',
                valueColor: 'kt-font-brand'
            }, {
                icon: 'flaticon2-notification kt-font-warning',
                title: 'Black Friday! Purchase Metronic at ever lowest 90% off for limited time',
                url: 'https://keenthemes.com.my/metronic',
                value: '70% Off!',
                valueColor: 'kt-font-warning'
            }, {
                icon: 'flaticon2-file kt-font-focus',
                title: 'Metronic React version is in progress.',
                url: 'https://keenthemes.com.my/metronic',
                value: '+13%',
                valueColor: 'kt-font-focus'
            },
        ]);
        // @ts-ignore
        this.widget4_4 = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["shuffle"])([
            {
                pic: './assets/media/client-logos/logo5.png',
                title: 'Trump Themes',
                desc: 'Make Metronic Development',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$2500',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo4.png',
                title: 'StarBucks',
                desc: 'Good Coffee & Snacks',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$290',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo3.png',
                title: 'Phyton',
                desc: 'A Programming Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+$17',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo2.png',
                title: 'GreenMakers',
                desc: 'Make Green Development',
                url: 'https://keenthemes.com.my/metronic',
                value: '-$2.50',
                valueColor: 'kt-font-brand'
            }, {
                pic: './assets/media/client-logos/logo1.png',
                title: 'FlyThemes',
                desc: 'A Let\'s Fly Fast Again Language',
                url: 'https://keenthemes.com.my/metronic',
                value: '+200',
                valueColor: 'kt-font-brand'
            },
        ]);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");

// Angular



// Core Module



var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"]
                    },
                ]),
            ],
            providers: [],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map