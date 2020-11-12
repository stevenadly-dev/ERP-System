import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'common',
    loadChildren: () =>
      import('src/app/finance/fcommon/fcommon.module').then(
        (m) => m.FcommonModule
      ),
  },
  {
    path: 'general-ledger',
    loadChildren: () =>
      import('src/app/finance/general-ledger/general-ledger.module').then(
        (m) => m.GeneralLedgerModule
      ),
  },
  {
    path: 'cash-mangement',
    loadChildren: () =>
      import('src/app/finance/cash-mangement/cash-mangement.module').then(
        (m) => m.CashMangementModule
      ),
  },
  {
    path: 'payable',
    loadChildren: () =>
      import('src/app/finance/payable/payable.module').then(
        (m) => m.PayableModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceRoutingModule {}
