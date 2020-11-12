import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartOfAccountCategoryRoutingModule } from './chart-of-account-category-routing.module';
import { ChartOfAccountCategoryComponent } from './components/cart-of-account-category/chart-of-account-category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartOfAccountCategoryFormComponent } from './components/chart-of-account-category-form/chart-of-account-category-form.component';
import { SubOfAccountSubCategoryTableComponent } from './components/sub-of-account-sub-category-table/sub-of-account-sub-category-table.component';

@NgModule({
  declarations: [ChartOfAccountCategoryComponent, ChartOfAccountCategoryFormComponent, SubOfAccountSubCategoryTableComponent],
  imports: [CommonModule, ChartOfAccountCategoryRoutingModule, SharedModule],
})
export class ChartOfAccountCategoryModule {}
