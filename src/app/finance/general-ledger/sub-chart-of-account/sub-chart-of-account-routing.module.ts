import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubChartOfAccountComponent } from './components/sub-chart-of-account/sub-chart-of-account.component';

const routes: Routes = [
  {
    path:"",
    component:SubChartOfAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubChartOfAccountRoutingModule { }
