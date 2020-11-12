import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyTransactionRoutingModule } from './company-transaction-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompanyTransactionComponent } from './components/company-transaction/company-transaction.component';
import { CompanyTransactionTabelComponent } from './components/company-transaction-tabel/company-transaction-tabel.component';

@NgModule({
  declarations: [CompanyTransactionComponent, CompanyTransactionTabelComponent],
  imports: [CommonModule, CompanyTransactionRoutingModule, SharedModule],
})
export class CompanyTransactionModule {}
