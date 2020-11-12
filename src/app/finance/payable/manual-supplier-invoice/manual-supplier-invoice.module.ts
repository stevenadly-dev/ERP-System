import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualSupplierInvoiceRoutingModule } from './manual-supplier-invoice-routing.module';
import { ManualSupplierInvoiceComponent } from './components/manual-supplier-invoice/manual-supplier-invoice.component';
import { ManualSupplierInvoiceFormComponent } from './components/manual-supplier-invoice-form/manual-supplier-invoice-form.component';
import { ManualSupplierInvoiceTableComponent } from './components/manual-supplier-invoice-table/manual-supplier-invoice-table.component';
import { ManualSupplierInvoiceTableFormComponent } from './components/manual-supplier-invoice-table-form/manual-supplier-invoice-table-form.component';


@NgModule({
  declarations: [ManualSupplierInvoiceComponent, ManualSupplierInvoiceFormComponent, ManualSupplierInvoiceTableComponent, ManualSupplierInvoiceTableFormComponent],
  imports: [
    CommonModule,
    ManualSupplierInvoiceRoutingModule
  ]
})
export class ManualSupplierInvoiceModule { }
