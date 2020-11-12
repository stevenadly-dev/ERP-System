import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'company',
    loadChildren: () =>
      import('src/app/finance/fcommon/company/company.module').then(
        (m) => m.CompanyModule
      ),
  },
  {
    path: 'division',
    loadChildren: () =>
      import('src/app/finance/fcommon/division/division.module').then(
        (m) => m.DivisionModule
      ),
  },
  {
    path: 'company-transaction',
    loadChildren: () =>
      import(
        'src/app/finance/fcommon/company-transaction/company-transaction.module'
      ).then((m) => m.CompanyTransactionModule),
  },
  {
    path: 'analysis',
    loadChildren: () =>
      import('src/app/finance/fcommon/analysis/analysis.module').then(
        (m) => m.AnalysisModule
      ),
  },
  {
    path: 'activity',
    loadChildren: () =>
      import('src/app/finance/fcommon/activity/activity.module').then(
        (m) => m.ActivityModule
      ),
  },
  {
    path: 'payment-terms',
    loadChildren: () =>
      import(
        'src/app/finance/fcommon/payment-terms/payments-terms.module'
      ).then((m) => m.PaymentsTermsModule),
  },
  {
    path: 'expense',
    loadChildren: () =>
      import('src/app/finance/fcommon/expense/expense.module').then(
        (m) => m.ExpenseModule
      ),
  },
  {
    path: 'discount',
    loadChildren: () =>
      import('src/app/finance/fcommon/discount/discount.module').then(
        (m) => m.DiscountModule
      ),
  },
  {
    path: 'currency',
    loadChildren: () =>
      import('src/app/finance/fcommon/currency/currency.module').then(
        (m) => m.CurrencyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FcommonRoutingModule {}
