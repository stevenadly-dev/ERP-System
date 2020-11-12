import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JournalVoucherCreateComponent } from './components/journal-voucher/journal-voucher.component';

const routes: Routes = [{
  path:'',
  component:JournalVoucherCreateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalVoucherRoutingModule { }
