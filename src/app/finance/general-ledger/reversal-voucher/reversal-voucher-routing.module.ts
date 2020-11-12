import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReversalVoucherComponent } from './components/reversal-voucher/reversal-voucher.component';

const routes: Routes = [{
  path:'',
  component:ReversalVoucherComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReversalVoucherRoutingModule { }
