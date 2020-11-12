import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'finance',
    loadChildren: () => import('src/app/finance/finance.module').then(m => m.FinanceModule),
  },
  {
    path: 'administrator',
    loadChildren: () => import('src/app/administrator/administrator.module').then(m => m.AdministratorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
