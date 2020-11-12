import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PettyCashInitializationComponent } from './components/petty-cash-initialization/petty-cash-initialization.component';

const routes: Routes = [
  {
    path: '',
    component: PettyCashInitializationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PettyCashInitializationRoutingModule { }
