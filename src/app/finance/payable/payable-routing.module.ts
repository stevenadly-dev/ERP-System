import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'supplier',
    loadChildren: () =>
      import('src/app/finance/payable/supplier/supplier.module').then(
        (m) => m.SupplierModule
      ),
  },
  {
    path: 'manual-supplier-invoice',
    loadChildren: () =>
      import('src/app/finance/payable/manual-supplier-invoice/manual-supplier-invoice.module').then(
        (m) => m.ManualSupplierInvoiceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayableRoutingModule { }
