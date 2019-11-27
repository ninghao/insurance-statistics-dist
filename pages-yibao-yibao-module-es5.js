(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-yibao-yibao-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yibao/Yibao.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yibao/Yibao.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nz-table\n  #yibaoTable\n  [nzData]=\"listOfDisplayData\"\n  nzSize=\"small\"\n  [nzPageSize]=\"20\"\n>\n  <thead>\n    <tr>\n      <th\n        nzShowFilter\n        [nzFilters]=\"listOfFilterAddress\"\n        (nzFilterChange)=\"filterAddressChange($event)\"\n      >\n        街道乡镇\n      </th>\n      <th nzCustomFilter>\n        社区村组\n        <i\n          nz-th-extra\n          class=\"ant-table-filter-icon\"\n          nz-icon\n          nz-dropdown\n          #dropdown=\"nzDropdown\"\n          nzType=\"search\"\n          [nzDropdownMenu]=\"menu\"\n          [class.ant-table-filter-open]=\"dropdown.nzVisible\"\n          nzTrigger=\"click\"\n          nzPlacement=\"bottomRight\"\n          [nzClickHide]=\"false\"\n          nzTableFilter\n        ></i>\n      </th>\n      <th>参保人数</th>\n      <th>已交人数</th>\n      <th>医保进度</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of yibaoTable.data\">\n      <td>{{ data['街道乡镇'] }}</td>\n      <td>{{ data['社区村组'] }}</td>\n      <td>{{ data['参保人数'] }}</td>\n      <td>{{ data['已交人数'] }}</td>\n      <td>{{ data['医保进度'] }}</td>\n    </tr>\n  </tbody>\n</nz-table>\n<nz-dropdown-menu #menu=\"nzDropdownMenu\">\n  <div class=\"search-box\">\n    <input\n      type=\"text\"\n      nz-input\n      placeholder=\"搜索社区村组\"\n      [(ngModel)]=\"searchValue\"\n    />\n    <button\n      nz-button\n      nzSize=\"small\"\n      nzType=\"primary\"\n      (click)=\"search()\"\n      class=\"search-button\"\n    >\n      搜索\n    </button>\n    <button nz-button nzSize=\"small\" (click)=\"reset()\">重置</button>\n  </div>\n</nz-dropdown-menu>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/yibao/Yibao.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/pages/yibao/Yibao.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".search-box {\n  padding: 8px;\n}\n\n.search-box input {\n  width: 188px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.search-box button {\n  width: 90px;\n}\n\n.search-button {\n  margin-right: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMveWliYW8vWWliYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3lpYmFvL1lpYmFvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQge1xuICB3aWR0aDogMTg4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4uc2VhcmNoLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/pages/yibao/yibao-routing.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/yibao/yibao-routing.module.ts ***!
          \*****************************************************/
        /*! exports provided: YibaoRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YibaoRoutingModule", function () { return YibaoRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _yibao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yibao.component */ "./src/app/pages/yibao/yibao.component.ts");
            var routes = [{ path: '', component: _yibao_component__WEBPACK_IMPORTED_MODULE_3__["YibaoComponent"] }];
            var YibaoRoutingModule = /** @class */ (function () {
                function YibaoRoutingModule() {
                }
                return YibaoRoutingModule;
            }());
            YibaoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                })
            ], YibaoRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/pages/yibao/yibao.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/yibao/yibao.component.ts ***!
          \************************************************/
        /*! exports provided: YibaoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YibaoComponent", function () { return YibaoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
            /* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);
            var YibaoComponent = /** @class */ (function () {
                function YibaoComponent() {
                    this.searchValue = '';
                    this.sortName = null;
                    this.sortValue = null;
                    this.listOfFilterAddress = [];
                    this.listOfSearchAddress = [];
                    this.listOfData = [];
                    this.listOfDisplayData = this.listOfData.slice();
                }
                YibaoComponent.prototype.reset = function () {
                    this.searchValue = '';
                    this.search();
                };
                YibaoComponent.prototype.sort = function (sortName, value) {
                    this.sortName = sortName;
                    this.sortValue = value;
                    this.search();
                };
                YibaoComponent.prototype.filterAddressChange = function (value) {
                    this.listOfSearchAddress = value;
                    this.search();
                };
                YibaoComponent.prototype.search = function () {
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
                YibaoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    papaparse__WEBPACK_IMPORTED_MODULE_2__["parse"]('https://tax.ninghao.org/sites/default/files/data/yibao.csv', {
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
                return YibaoComponent;
            }());
            YibaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-yibao',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./Yibao.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/yibao/Yibao.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./Yibao.component.css */ "./src/app/pages/yibao/Yibao.component.css")).default]
                })
            ], YibaoComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/yibao/yibao.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/pages/yibao/yibao.module.ts ***!
          \*********************************************/
        /*! exports provided: YibaoModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YibaoModule", function () { return YibaoModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _yibao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yibao.component */ "./src/app/pages/yibao/yibao.component.ts");
            /* harmony import */ var _yibao_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./yibao-routing.module */ "./src/app/pages/yibao/yibao-routing.module.ts");
            /* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var YibaoModule = /** @class */ (function () {
                function YibaoModule() {
                }
                return YibaoModule;
            }());
            YibaoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_yibao_component__WEBPACK_IMPORTED_MODULE_3__["YibaoComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _yibao_routing_module__WEBPACK_IMPORTED_MODULE_4__["YibaoRoutingModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDropDownModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
                        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzIconModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ],
                })
            ], YibaoModule);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-yibao-yibao-module-es2015.js.map
//# sourceMappingURL=pages-yibao-yibao-module-es5.js.map
//# sourceMappingURL=pages-yibao-yibao-module-es5.js.map