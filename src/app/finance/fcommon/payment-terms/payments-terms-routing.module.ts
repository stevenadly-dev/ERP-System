import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentTermsComponent } from './components/payment-terms/payment-terms.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentTermsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentsTermsRoutingModule {}
