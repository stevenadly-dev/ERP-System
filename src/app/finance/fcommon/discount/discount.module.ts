import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscountRoutingModule } from './discount-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DiscountComponent } from './components/discount/discount.component';
import { DiscountFormComponent } from './components/discount-form/discount-form.component';

@NgModule({
  declarations: [DiscountComponent, DiscountFormComponent],
  imports: [CommonModule, DiscountRoutingModule, SharedModule],
})
export class DiscountModule {}
