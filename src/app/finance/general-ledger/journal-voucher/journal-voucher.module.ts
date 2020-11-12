import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JournalVoucherRoutingModule } from './journal-voucher-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { JournalVoucherCreateComponent } from './components/journal-voucher/journal-voucher.component';
import { JournalVoucherFormComponent } from './components/journal-voucher-form/journal-voucher-form.component';
import { JournalVoucherTableComponent } from './components/journal-voucher-table/journal-voucher-table.component';
import { JournalVoucherTableFormComponent } from './components/journal-voucher-table-form/journal-voucher-table-form.component';


@NgModule({
  declarations: [JournalVoucherCreateComponent, JournalVoucherFormComponent, JournalVoucherTableComponent, JournalVoucherTableFormComponent],
  imports: [
    CommonModule,
    JournalVoucherRoutingModule,
    SharedModule
  ]
})
export class JournalVoucherModule { }
 