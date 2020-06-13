import { NgModule } from '@angular/core';
import { CustMatGridComponent } from './cust-mat-grid.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CustMatGridComponent],
  imports: [MatTableModule, CommonModule],
  exports: [CustMatGridComponent]
})
export class CustMatGridModule { }
