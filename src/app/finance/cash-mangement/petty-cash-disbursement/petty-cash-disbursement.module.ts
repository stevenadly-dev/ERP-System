import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PettyCashDisbursementRoutingModule } from './petty-cash-disbursement-routing.module';
import { PettyCashDisbursementComponent } from './components/petty-cash-disbursement/petty-cash-disbursement.component';
import { PettyCashDisbursementFormComponent } from './components/petty-cash-disbursement-form/petty-cash-disbursement-form.component';
import { PettyCashDisbursementTableComponent } from './components/petty-cash-disbursement-table/petty-cash-disbursement-table.component';
import { PettyCashDisbursementTableFormComponent } from './components/petty-cash-disbursement-table-form/petty-cash-disbursement-table-form.component';


@NgModule({
  declarations: [PettyCashDisbursementComponent, PettyCashDisbursementFormComponent, PettyCashDisbursementTableComponent, PettyCashDisbursementTableFormComponent],
  imports: [
    CommonModule,
    PettyCashDisbursementRoutingModule,
    SharedModule
  ]
})
export class PettyCashDisbursementModule { }
