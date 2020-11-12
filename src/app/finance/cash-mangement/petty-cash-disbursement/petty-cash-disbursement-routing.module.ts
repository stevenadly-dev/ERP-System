import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PettyCashDisbursementComponent } from './components/petty-cash-disbursement/petty-cash-disbursement.component';

const routes: Routes = [
  {
    path: '',
    component: PettyCashDisbursementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PettyCashDisbursementRoutingModule { }
