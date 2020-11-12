import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashBoxComponent } from './components/cash-box/cash-box.component';

const routes: Routes = [
  {
    path: '',
    component: CashBoxComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashBoxRoutingModule { }
