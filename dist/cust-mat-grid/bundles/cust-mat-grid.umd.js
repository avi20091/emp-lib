(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/table'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('cust-mat-grid', ['exports', '@angular/core', '@angular/material/table', '@angular/common'], factory) :
    (global = global || self, factory(global['cust-mat-grid'] = {}, global.ng.core, global.ng.material.table, global.ng.common));
}(this, (function (exports, core, table, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cust-mat-grid.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustMatGridService = /** @class */ (function () {
        function CustMatGridService() {
        }
        CustMatGridService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CustMatGridService.ctorParameters = function () { return []; };
        /** @nocollapse */ CustMatGridService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CustMatGridService_Factory() { return new CustMatGridService(); }, token: CustMatGridService, providedIn: "root" });
        return CustMatGridService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cust-mat-grid.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustMatGridComponent = /** @class */ (function () {
        function CustMatGridComponent() {
            this.objectKeys = Object.keys;
        }
        /**
         * @return {?}
         */
        CustMatGridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.dataSource = new table.MatTableDataSource(this.tableData);
        };
        CustMatGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-cust-mat-grid',
                        template: "\n  <h3>Custom/Resusable Mat Grid</h3>\n  <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <ng-container [matColumnDef]=\"tableData\" *ngFor=\"let tableData of objectKeys(columnHeader)\">\n      <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element[tableData] }}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"objectKeys(columnHeader)\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: objectKeys(columnHeader);\"></tr>\n  </table>\n  "
                    }] }
        ];
        CustMatGridComponent.propDecorators = {
            tableData: [{ type: core.Input }],
            columnHeader: [{ type: core.Input }]
        };
        return CustMatGridComponent;
    }());
    if (false) {
        /** @type {?} */
        CustMatGridComponent.prototype.tableData;
        /** @type {?} */
        CustMatGridComponent.prototype.columnHeader;
        /** @type {?} */
        CustMatGridComponent.prototype.objectKeys;
        /** @type {?} */
        CustMatGridComponent.prototype.dataSource;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/cust-mat-grid.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustMatGridModule = /** @class */ (function () {
        function CustMatGridModule() {
        }
        CustMatGridModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CustMatGridComponent],
                        imports: [table.MatTableModule, common.CommonModule],
                        exports: [CustMatGridComponent]
                    },] }
        ];
        return CustMatGridModule;
    }());

    exports.CustMatGridComponent = CustMatGridComponent;
    exports.CustMatGridModule = CustMatGridModule;
    exports.CustMatGridService = CustMatGridService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=cust-mat-grid.umd.js.map
