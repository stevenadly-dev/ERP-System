import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'chart-of-account-category',
    loadChildren: () =>
      import(
        'src/app/finance/general-ledger/chart-of-account-category/chart-of-account-category.module'
      ).then((m) => m.ChartOfAccountCategoryModule),
  },
  {
    path: 'chart-of-account',
    loadChildren: () =>
      import(
        'src/app/finance/general-ledger/chart-of-account/chart-of-account.module'
      ).then((m) => m.ChartOfAccountModule),
  },
  { path: 'sub-chart-of-account', 
  loadChildren: () =>
  import(
    'src/app/finance/general-ledger/sub-chart-of-account/sub-chart-of-account.module'
  ).then((m) => m.SubChartOfAccountModule)
},

  { path: 'correction-voucher',  loadChildren: () =>
  import(
    'src/app/finance/general-ledger/correction-voucher/correction-voucher.module'
  ).then((m) => m.CorrectionVoucherModule)
},
  { path: 'journal-voucher' , 
  loadChildren: () =>
  import(
    'src/app/finance/general-ledger/journal-voucher/journal-voucher.module'
  ).then((m) => m.JournalVoucherModule)
},
  { path: 'reversal-voucher',
  loadChildren: () =>
  import(
    'src/app/finance/general-ledger/reversal-voucher/reversal-voucher.module'
  ).then((m) => m.ReversalVoucherModule)
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralLedgerRoutingModule {}
