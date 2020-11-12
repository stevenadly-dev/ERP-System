import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualSupplierInvoiceComponent } from './components/manual-supplier-invoice/manual-supplier-invoice.component';

const routes: Routes = [
  {
    path: '',
    component: ManualSupplierInvoiceComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualSupplierInvoiceRoutingModule { }
