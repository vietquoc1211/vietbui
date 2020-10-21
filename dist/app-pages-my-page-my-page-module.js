(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-my-page-my-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/my-page/my-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/my-page/my-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/my-page/my-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/my-page/my-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXBhZ2UvbXktcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/my-page/my-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/my-page/my-page.component.ts ***!
  \****************************************************/
/*! exports provided: MyPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageComponent", function() { return MyPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyPageComponent = /** @class */ (function () {
    function MyPageComponent() {
    }
    MyPageComponent.prototype.ngOnInit = function () {
    };
    MyPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-my-page',
            template: __webpack_require__(/*! raw-loader!./my-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/my-page/my-page.component.html"),
            styles: [__webpack_require__(/*! ./my-page.component.scss */ "./src/app/pages/my-page/my-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyPageComponent);
    return MyPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/my-page/my-page.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/my-page/my-page.module.ts ***!
  \*************************************************/
/*! exports provided: MyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPageModule", function() { return MyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _my_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-page.component */ "./src/app/pages/my-page/my-page.component.ts");

// Angular



// Core Module


var MyPageModule = /** @class */ (function () {
    function MyPageModule() {
    }
    MyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _my_page_component__WEBPACK_IMPORTED_MODULE_5__["MyPageComponent"]
                    },
                ]),
            ],
            providers: [],
            declarations: [
                _my_page_component__WEBPACK_IMPORTED_MODULE_5__["MyPageComponent"],
            ]
        })
    ], MyPageModule);
    return MyPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-my-page-my-page-module.js.map