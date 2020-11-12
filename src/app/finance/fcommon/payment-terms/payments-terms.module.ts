import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsTermsRoutingModule } from './payments-terms-routing.module';
import { PaymentTermsComponent } from './components/payment-terms/payment-terms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentTermsFormComponent } from './components/payment-terms-form/payment-terms-form.component';

@NgModule({
  declarations: [PaymentTermsComponent, PaymentTermsFormComponent],
  imports: [CommonModule, PaymentsTermsRoutingModule, SharedModule],
})
export class PaymentsTermsModule {}
