import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cash-box',
    loadChildren: () =>
      import('src/app/finance/cash-mangement/cash-box/cash-box.module').then(
        (m) => m.CashBoxModule
      ),
  },
  {
    path: 'petty-cash-initialization',
    loadChildren: () =>
      import('src/app/finance/cash-mangement/petty-cash-initialization/petty-cash-initialization.module').then(
        (m) => m.PettyCashInitializationModule
      ),
  },
  {
    path: 'petty-cash-disbursement',
    loadChildren: () =>
      import('src/app/finance/cash-mangement/petty-cash-disbursement/petty-cash-disbursement.module').then(
        (m) => m.PettyCashDisbursementModule
      ),
  },
  {
    path: 'petty-cash-reimbursement',
    loadChildren: () =>
      import('src/app/finance/cash-mangement/petty-cash-reimbursement/petty-cash-reimbursement.module').then(
        (m) => m.PettyCashReimbursementModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashMangementRoutingModule { }
