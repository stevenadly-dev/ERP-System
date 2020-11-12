import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReversalVoucherRoutingModule } from './reversal-voucher-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReversalVoucherComponent } from './components/reversal-voucher/reversal-voucher.component';
import { ReversalVoucherFormComponent } from './components/reversal-voucher-form/reversal-voucher-form.component';
import { ReversalVoucherTableComponent } from './components/reversal-voucher-table/reversal-voucher-table.component';
import { ReversalVoucherTableFormComponent } from './components/reversal-voucher-table-form/reversal-voucher-table-form.component';



@NgModule({
  declarations: [ReversalVoucherComponent, ReversalVoucherFormComponent, ReversalVoucherTableComponent, ReversalVoucherTableFormComponent],
  imports: [
    CommonModule,
    ReversalVoucherRoutingModule,
    SharedModule
  ]
})
export class ReversalVoucherModule { }
