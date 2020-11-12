import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartOfAccountCategoryComponent } from './components/cart-of-account-category/chart-of-account-category.component';

const routes: Routes = [
  {
    path: '',
    component: ChartOfAccountCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartOfAccountCategoryRoutingModule {}
