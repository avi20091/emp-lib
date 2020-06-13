import { Injectable, ɵɵdefineInjectable, Component, Input, NgModule } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/cust-mat-grid.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustMatGridService = /** @class */ (function () {
    function CustMatGridService() {
    }
    CustMatGridService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CustMatGridService.ctorParameters = function () { return []; };
    /** @nocollapse */ CustMatGridService.ngInjectableDef = ɵɵdefineInjectable({ factory: function CustMatGridService_Factory() { return new CustMatGridService(); }, token: CustMatGridService, providedIn: "root" });
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
        this.dataSource = new MatTableDataSource(this.tableData);
    };
    CustMatGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-cust-mat-grid',
                    template: "\n  <h3>Custom/Resusable Mat Grid</h3>\n  <table style=\"width:100%\" mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <ng-container [matColumnDef]=\"tableData\" *ngFor=\"let tableData of objectKeys(columnHeader)\">\n      <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element[tableData] }}</td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"objectKeys(columnHeader)\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: objectKeys(columnHeader);\"></tr>\n  </table>\n  "
                }] }
    ];
    CustMatGridComponent.propDecorators = {
        tableData: [{ type: Input }],
        columnHeader: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [CustMatGridComponent],
                    imports: [MatTableModule, CommonModule],
                    exports: [CustMatGridComponent]
                },] }
    ];
    return CustMatGridModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: cust-mat-grid.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CustMatGridComponent, CustMatGridModule, CustMatGridService };
//# sourceMappingURL=cust-mat-grid.js.map
