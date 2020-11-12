import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PettyCashReimbursementComponent } from './components/petty-cash-reimbursement/petty-cash-reimbursement.component';

const routes: Routes = [
  {
    path: '',
    component: PettyCashReimbursementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PettyCashReimbursementRoutingModule { }
