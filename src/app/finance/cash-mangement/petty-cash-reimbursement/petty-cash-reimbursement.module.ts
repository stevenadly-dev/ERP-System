import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PettyCashReimbursementRoutingModule } from './petty-cash-reimbursement-routing.module';
import { PettyCashReimbursementComponent } from './components/petty-cash-reimbursement/petty-cash-reimbursement.component';
import { PettyCashReimbursementFormComponent } from './components/petty-cash-reimbursement-form/petty-cash-reimbursement-form.component';
import { PettyCashReimbursementTableComponent } from './components/petty-cash-reimbursement-table/petty-cash-reimbursement-table.component';
import { PettyCashReimbursementTableFormComponent } from './components/petty-cash-reimbursement-table-form/petty-cash-reimbursement-table-form.component';


@NgModule({
  declarations: [PettyCashReimbursementComponent, PettyCashReimbursementFormComponent, PettyCashReimbursementTableComponent, PettyCashReimbursementTableFormComponent],
  imports: [
    CommonModule,
    PettyCashReimbursementRoutingModule,
    SharedModule
  ]
})
export class PettyCashReimbursementModule { }
