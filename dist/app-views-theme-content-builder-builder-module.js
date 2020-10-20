(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-theme-content-builder-builder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/content/builder/builder.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/content/builder/builder.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-notice [icon]=\"'flaticon-warning kt-font-primary'\">\n\tThe layout builder helps to configure the layout with preferred options and preview it in real time.\n\tThe configured layout options will be saved until you change or reset them.\n\tTo use the layout builder choose the layout options and click the <code>Preview</code> button to preview the changes.\n</kt-notice>\n\n<form class=\"kt-form kt-form--label-right\" novalidate #form=\"ngForm\" (ngSubmit)=\"submitPreview($event)\">\n\t<kt-portlet [class]=\"'kt-portlet--tabs'\">\n\t\t<kt-portlet-header [noTitle]=\"true\">\n\t\t\t<ng-container ktPortletTools>\n\t\t\t\t<ul ktTabClickEvent class=\"nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-left nav-tabs-line-primary\" role=\"tablist\">\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-1')\" class=\"nav-link active\" href=\"javascript:;\" role=\"tab\">\n\t\t\t\t\t\t\tSkins\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-2')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\n\t\t\t\t\t\t\tPage\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-3')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\n\t\t\t\t\t\t\tHeader\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-4')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\n\t\t\t\t\t\t\tSubheader\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-5')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\n\t\t\t\t\t\t\tContent\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-6')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\n\t\t\t\t\t\t\tAside\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t<a (click)=\"tab.select('tab-id-7')\" class=\"nav-link\" href=\"javascript:;\" role=\"tab\">\n\t\t\t\t\t\t\tFooter\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</ng-container>\n\t\t</kt-portlet-header>\n\t\t<kt-portlet-body>\n\t\t\t<ngb-tabset #tab=\"ngbTabset\">\n\t\t\t\t<ngb-tab id=\"tab-id-1\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Header Skin:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][self][skin]\" [(ngModel)]=\"model.header.self.skin\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"light\">Light (Default)</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select header skin</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Header Menu Skin:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][menu][desktop][submenu][skin]\" [(ngModel)]=\"model.header.menu.desktop.submenu.skin\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"light\">Light (Default)</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select header skin</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Logo Bar Skin:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[brand][self][skin]\" [(ngModel)]=\"model.brand.self.skin\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark (Default)</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"light\">Light</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select logo bar skin</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Aside Skin:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[aside][self][skin]\" [(ngModel)]=\"model.aside.self.skin\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"dark\">Dark (Default)</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"light\">Light</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select header skin</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab id=\"tab-id-2\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Page Loader:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[loader][type]\" [(ngModel)]=\"model.loader.type\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Disabled</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"default\">Spinner</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"spinner-message\">Spinner & Message</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"spinner-logo\">Spinner & Logo</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select page loading indicator</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab id=\"tab-id-3\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed Desktop Header:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][self][fixed][desktop]\" [(ngModel)]=\"model.header.self.fixed.desktop\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable fixed header for desktop mode</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Mobile Fixed Header:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][self][fixed][mobile]\" [(ngModel)]=\"model.header.self.fixed.mobile\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable fixed header for mobile mode</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"kt-separator kt-separator--space-lg kt-separator--border-dashed\"></div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Display Header Menu:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][menu][self][display]\" [(ngModel)]=\"model.header.menu.self.display\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Display header menu</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Header Menu Layout:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[header][menu][self][layout]\" [(ngModel)]=\"model.header.menu.self.layout\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"default\">Default</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"tab\">Tab</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select header menu layout style</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"kt-separator kt-separator--space-lg kt-separator--border-dashed\"></div>\n\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Header Menu Arrows:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[header][menu][self][root-arrow]\" [(ngModel)]=\"model.header.menu.self['root-arrow']\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable header menu root link arrows</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab id=\"tab-id-4\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Display Subheader:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t        <input type=\"checkbox\" name=\"builder[subheader][display]\" [(ngModel)]=\"model.subheader.display\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t        <span></span>\n\t\t\t\t\t\t\t\t\t    </label>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Display subheader</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed Subheader:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[subheader][fixed]\" [(ngModel)]=\"model.subheader.fixed\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Enable fixed(sticky) subheader. Requires <code>Solid</code> subheader style.</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Width:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[subheader][width]\" [(ngModel)]=\"model.subheader.width\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fluid\">Fluid</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fixed\">Fixed</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select layout width type.</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Subheader Style:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[subheader][style]\" [(ngModel)]=\"model.subheader.style\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"transparent\">Transparent</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"solid\">Solid</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select subheader style</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Subheader Layout:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[subheader][layout]\" [(ngModel)]=\"model.subheader.layout\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"subheader-v1\">Subheader 1</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"subheader-v2\">Subheader 2</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"subheader-v3\">Subheader 3</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select subheader layout</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab id=\"tab-id-5\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Width:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[content][width]\" [(ngModel)]=\"model.content.width\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fluid\">Fluid</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fixed\">Fixed</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select layout width type.</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab id=\"tab-id-6\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Display:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-6\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][display]\" [(ngModel)]=\"model.aside.self.display\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t        <span></span>\n\t\t\t\t\t\t\t\t\t    </label>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Display aside menu</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][fixed]\" [(ngModel)]=\"model.aside.self.fixed\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t        <span></span>\n\t\t\t\t\t\t\t\t\t    </label>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Set fixed aside layout</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Minimize:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][minimize][toggle]\" [(ngModel)]=\"model.aside.self.minimize.toggle\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t        <span></span>\n\t\t\t\t\t\t\t\t\t    </label>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Allow aside minimizing</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Default Minimize:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[aside][self][minimize][default]\" [(ngModel)]=\"model.aside.self.minimize.default\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t        <span></span>\n\t\t\t\t\t\t\t\t\t    </label>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Set aside minimized by default</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Submenu Toggle:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[aside][menu][dropdown]\" [(ngModel)]=\"model.aside.menu.dropdown\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"true\">Dropdown</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"false\">Accordion</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select submenu toggle mode(works only when <code>Fixed Mode</code> is disabled)</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t\t<ngb-tab id=\"tab-id-7\">\n\t\t\t\t\t<ng-template ngbTabContent>\n\t\t\t\t\t\t<div class=\"kt-section kt-margin-t-30\">\n\t\t\t\t\t\t\t<div class=\"kt-section__body\">\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Fixed Footer:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t<span class=\"kt-switch kt-switch--icon-check\">\n\t\t\t\t\t\t\t\t\t    <label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"builder[footer][self][fixed]\" [(ngModel)]=\"model.footer.self.fixed\" value=\"true\"/>\n\t\t\t\t\t\t\t\t\t        <span></span>\n\t\t\t\t\t\t\t\t\t    </label>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Set fixed footer</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">Width:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9 col-xl-4\">\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" name=\"builder[footer][self][width]\" [(ngModel)]=\"model.footer.self.width\">\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fluid\">Fluid</option>\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"fixed\">Fixed</option>\n\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-text text-muted\">Select layout width type.</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ngb-tab>\n\t\t\t</ngb-tabset>\n\t\t</kt-portlet-body>\n\t\t<kt-portlet-footer>\n\t\t\t<div class=\"kt-form__actions\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4\"></div>\n\t\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t\t<button type=\"submit\" name=\"builder_submit\" class=\"btn btn-primary\">\n\t\t\t\t\t\t\t<i class=\"la la-eye\"></i>\n\t\t\t\t\t\t\tPreview\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t&nbsp;\n\t\t\t\t\t\t<button type=\"submit\" (click)=\"resetPreview($event)\" name=\"builder_reset\" class=\"btn btn-secondary\">\n\t\t\t\t\t\t\t<i class=\"la la-recycle\"></i>\n\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</kt-portlet-footer>\n\t</kt-portlet>\n</form>\n\n<kt-portlet>\n\t<kt-portlet-header [title]=\"'Generated Config <small>can be used for layout config in <code>/src/app/core/_config/layout.config.ts</code></small>'\">\n\t</kt-portlet-header>\n\t<kt-portlet-body>\n\t\t<div perfectScrollbar [ngStyle]=\"{'max-height': '50vh', 'position': 'relative'}\">\n\t\t\t<pre><code [highlight]=\"model|json\"></code></pre>\n\t\t</div>\n\t</kt-portlet-body>\n</kt-portlet>\n"

/***/ }),

/***/ "./src/app/views/theme/content/builder/builder.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/theme/content/builder/builder.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGhlbWUvY29udGVudC9idWlsZGVyL0Q6XFxNeVNvdXJjZVxcdmlldGJ1aS9zcmNcXGFwcFxcdmlld3NcXHRoZW1lXFxjb250ZW50XFxidWlsZGVyXFxidWlsZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0csYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGhlbWUvY29udGVudC9idWlsZGVyL2J1aWxkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdDo6bmctZGVlcCB7XG5cdFx0bmdiLXRhYnNldCA+IC5uYXYtdGFicyB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/theme/content/builder/builder.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/theme/content/builder/builder.component.ts ***!
  \******************************************************************/
/*! exports provided: BuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderComponent", function() { return BuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");

// Angular


// Layout

var BuilderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function BuilderComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BuilderComponent.prototype.ngOnInit = function () {
        this.model = this.layoutConfigService.getConfig();
    };
    /**
     * Reset preview
     *
     * @param e: Event
     */
    BuilderComponent.prototype.resetPreview = function (e) {
        e.preventDefault();
        this.layoutConfigService.resetConfig();
        location.reload();
    };
    /**
     * Submit preview
     *
     * @param e: Event
     */
    BuilderComponent.prototype.submitPreview = function (e) {
        this.layoutConfigService.setConfig(this.model, true);
        location.reload();
    };
    BuilderComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], BuilderComponent.prototype, "form", void 0);
    BuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-builder',
            template: __webpack_require__(/*! raw-loader!./builder.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/content/builder/builder.component.html"),
            styles: [__webpack_require__(/*! ./builder.component.scss */ "./src/app/views/theme/content/builder/builder.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], BuilderComponent);
    return BuilderComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/content/builder/builder.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/theme/content/builder/builder.module.ts ***!
  \***************************************************************/
/*! exports provided: BuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuilderModule", function() { return BuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _builder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./builder.component */ "./src/app/views/theme/content/builder/builder.component.ts");

// Angular





// NgBootstrap

// Perfect Scrollbar

// Partials

// Highlight JS

// CoreModule

// Builder component

var BuilderModule = /** @class */ (function () {
    function BuilderModule() {
    }
    BuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_8__["PartialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_9__["HighlightModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _builder_component__WEBPACK_IMPORTED_MODULE_11__["BuilderComponent"]
                    }
                ]),
                // ng-bootstrap modules
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"],
            ],
            providers: [],
            declarations: [_builder_component__WEBPACK_IMPORTED_MODULE_11__["BuilderComponent"]]
        })
    ], BuilderModule);
    return BuilderModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-theme-content-builder-builder-module.js.map