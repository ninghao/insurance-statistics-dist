(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yanglao-yanglao-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yanglao/yanglao.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yanglao/yanglao.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nz-table\n  #yanglaoTable\n  [nzData]=\"listOfDisplayData\"\n  nzSize=\"small\"\n  [nzPageSize]=\"20\"\n>\n  <thead>\n    <tr>\n      <th\n        nzShowFilter\n        [nzFilters]=\"listOfFilterAddress\"\n        (nzFilterChange)=\"filterAddressChange($event)\"\n      >\n        街道乡镇\n      </th>\n      <th nzCustomFilter>\n        社区村组\n        <i\n          nz-th-extra\n          class=\"ant-table-filter-icon\"\n          nz-icon\n          nz-dropdown\n          #dropdown=\"nzDropdown\"\n          nzType=\"search\"\n          [nzDropdownMenu]=\"menu\"\n          [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n          nzTrigger=\"click\"\n          nzPlacement=\"bottomRight\"\n          [nzClickHide]=\"false\"\n          nzTableFilter\n        ></i>\n      </th>\n      <th>参保人数</th>\n      <th>已交人数</th>\n      <th>养老进度</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of yanglaoTable.data\">\n      <td>{{ data['街道乡镇'] }}</td>\n      <td>{{ data['社区村组'] }}</td>\n      <td>{{ data['参保人数'] }}</td>\n      <td>{{ data['已交人数'] }}</td>\n      <td>{{ data['养老进度'] }}</td>\n    </tr>\n  </tbody>\n</nz-table>\n<nz-dropdown-menu #menu=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      placeholder=\"搜索社区村组\"\n      [(ngModel)]=\"searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      搜索\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">重置</button>\n  </div>\n</nz-dropdown-menu>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/yanglao/yanglao-routing.module.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/pages/yanglao/yanglao-routing.module.ts ***!
          \*********************************************************/
        /*! exports provided: YanglaoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YanglaoRoutingModule", function () { return YanglaoRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _yanglao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yanglao.component */ "./src/app/pages/yanglao/yanglao.component.ts");
            var routes = [{ path: '', component: _yanglao_component__WEBPACK_IMPORTED_MODULE_3__["YanglaoComponent"] }];
            var YanglaoRoutingModule = /** @class */ (function () {
                function YanglaoRoutingModule() {
                }
                return YanglaoRoutingModule;
            }());
            YanglaoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], YanglaoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yanglao/yanglao.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/yanglao/yanglao.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWFuZ2xhby95YW5nbGFvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy95YW5nbGFvL3lhbmdsYW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYm94IHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIHdpZHRoOiAxODhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5zZWFyY2gtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/yanglao/yanglao.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/yanglao/yanglao.component.ts ***!
          \****************************************************/
        /*! exports provided: YanglaoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YanglaoComponent", function () { return YanglaoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
            /* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);
            var YanglaoComponent = /** @class */ (function () {
                function YanglaoComponent() {
                    this.searchValue = '';
                    this.sortName = null;
                    this.sortValue = null;
                    this.listOfFilterAddress = [];
                    this.listOfSearchAddress = [];
                    this.listOfData = [];
                    this.listOfDisplayData = this.listOfData.slice();
                }
                YanglaoComponent.prototype.reset = function () {
                    this.searchValue = '';
                    this.search();
                };
                YanglaoComponent.prototype.sort = function (sortName, value) {
                    this.sortName = sortName;
                    this.sortValue = value;
                    this.search();
                };
                YanglaoComponent.prototype.filterAddressChange = function (value) {
                    this.listOfSearchAddress = value;
                    this.search();
                };
                YanglaoComponent.prototype.search = function () {
                    var _this = this;
                    console.log('search');
                    var filterFunc = function (item) {
                        return ((_this.listOfSearchAddress.length
                            ? _this.listOfSearchAddress.some(function (address) { return item.街道乡镇.indexOf(address) !== -1; })
                            : true) && item.社区村组.indexOf(_this.searchValue) !== -1);
                    };
                    var data = this.listOfData.filter(function (item) { return filterFunc(item); });
                    this.listOfDisplayData = data;
                    // this.listOfDisplayData = data.sort((a, b) =>
                    //   this.sortValue === 'ascend'
                    //     ? a[this.sortName!] > b[this.sortName!]
                    //       ? 1
                    //       : -1
                    //     : b[this.sortName!] > a[this.sortName!]
                    //     ? 1
                    //     : -1,
                    // );
                };
                YanglaoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    papaparse__WEBPACK_IMPORTED_MODULE_2__["parse"]('https://tax.ninghao.org/sites/default/files/data/yanglao.csv', {
                        download: true,
                        header: true,
                        skipEmptyLines: true,
                        complete: function (result, file) {
                            console.log(result);
                            // 设置表格数据
                            _this.listOfData = result.data;
                            // 街道选项列表
                            var streets = result.data.map(function (item) { return item.街道乡镇; });
                            _this.listOfFilterAddress = new Set(streets).slice().map(function (item) {
                                return {
                                    text: item,
                                    value: item,
                                };
                            });
                            _this.listOfDisplayData = _this.listOfData.slice();
                        },
                    });
                };
                return YanglaoComponent;
            }());
            YanglaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-yanglao',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yanglao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yanglao/yanglao.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yanglao.component.css */ "./src/app/pages/yanglao/yanglao.component.css")).default]
                })
            ], YanglaoComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/yanglao/yanglao.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/pages/yanglao/yanglao.module.ts ***!
          \*************************************************/
        /*! exports provided: YanglaoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YanglaoModule", function () { return YanglaoModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _yanglao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yanglao.component */ "./src/app/pages/yanglao/yanglao.component.ts");
            /* harmony import */ var _yanglao_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./yanglao-routing.module */ "./src/app/pages/yanglao/yanglao-routing.module.ts");
            /* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var YanglaoModule = /** @class */ (function () {
                function YanglaoModule() {
                }
                return YanglaoModule;
            }());
            YanglaoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_yanglao_component__WEBPACK_IMPORTED_MODULE_3__["YanglaoComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _yanglao_routing_module__WEBPACK_IMPORTED_MODULE_4__["YanglaoRoutingModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDropDownModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ],
                })
            ], YanglaoModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yanglao-yanglao-module-es2015.js.map
//# sourceMappingURL=pages-yanglao-yanglao-module-es5.js.map
//# sourceMappingURL=pages-yanglao-yanglao-module-es5.js.map