import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyTransactionComponent } from './components/company-transaction/company-transaction.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyTransactionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyTransactionRoutingModule {}
