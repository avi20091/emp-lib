/**
 * @fileoverview added by tsickle
 * Generated from: lib/cust-mat-grid.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export class CustMatGridComponent {
    constructor() {
        this.objectKeys = Object.keys;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.tableData);
    }
}
CustMatGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-cust-mat-grid',
                template: `
  <h3>Custom/Resusable Mat Grid</h3>
  <table style="width:100%" mat-table [dataSource]="dataSource" class="mat-elevation-z8">

    <ng-container [matColumnDef]="tableData" *ngFor="let tableData of objectKeys(columnHeader)">
      <th mat-header-cell *matHeaderCellDef> {{columnHeader[tableData]}}    </th>
      <td mat-cell *matCellDef="let element"> {{element[tableData] }}</td>
    </ng-container>

    <tr mat-header-row *matHeaderRowDef="objectKeys(columnHeader)"></tr>
    <tr mat-row *matRowDef="let row; columns: objectKeys(columnHeader);"></tr>
  </table>
  `
            }] }
];
CustMatGridComponent.propDecorators = {
    tableData: [{ type: Input }],
    columnHeader: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdC1tYXQtZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jdXN0LW1hdC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2N1c3QtbWF0LWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFtQjdELE1BQU0sT0FBTyxvQkFBb0I7SUFqQmpDO1FBcUJFLGVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBUTNCLENBQUM7Ozs7SUFKQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUEzQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7YUFFRjs7O3dCQUdFLEtBQUs7MkJBQ0wsS0FBSzs7OztJQUROLHlDQUFtQjs7SUFDbkIsNENBQXNCOztJQUN0QiwwQ0FBeUI7O0lBRXpCLDBDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWN1c3QtbWF0LWdyaWQnLFxuICB0ZW1wbGF0ZTogYFxuICA8aDM+Q3VzdG9tL1Jlc3VzYWJsZSBNYXQgR3JpZDwvaDM+XG4gIDx0YWJsZSBzdHlsZT1cIndpZHRoOjEwMCVcIiBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuXG4gICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cInRhYmxlRGF0YVwiICpuZ0Zvcj1cImxldCB0YWJsZURhdGEgb2Ygb2JqZWN0S2V5cyhjb2x1bW5IZWFkZXIpXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbHVtbkhlYWRlclt0YWJsZURhdGFdfX0gICAgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFt0YWJsZURhdGFdIH19PC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwib2JqZWN0S2V5cyhjb2x1bW5IZWFkZXIpXCI+PC90cj5cbiAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogb2JqZWN0S2V5cyhjb2x1bW5IZWFkZXIpO1wiPjwvdHI+XG4gIDwvdGFibGU+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdE1hdEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHRhYmxlRGF0YTtcbiAgQElucHV0KCkgY29sdW1uSGVhZGVyO1xuICBvYmplY3RLZXlzID0gT2JqZWN0LmtleXM7XG5cbiAgZGF0YVNvdXJjZTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMudGFibGVEYXRhKTsgICAgXG4gIH1cblxufVxuIl19