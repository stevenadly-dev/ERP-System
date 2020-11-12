import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { GeneralLedgerRoutingModule } from './general-ledger-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, GeneralLedgerRoutingModule, SharedModule],
})
export class GeneralLedgerModule {}
