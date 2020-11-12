import { ExpenseComponent } from './components/expense/expense.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

@NgModule({
  declarations: [ExpenseComponent, ExpenseFormComponent],
  imports: [CommonModule, ExpenseRoutingModule, SharedModule],
})
export class ExpenseModule {}
