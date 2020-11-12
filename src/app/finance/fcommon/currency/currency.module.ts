import { CurrencyComponent } from './components/currency/currency.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CurrencyFormComponent } from './components/currency-form/currency-form.component';
import { CurrencyTableComponent } from './components/currency-table/currency-table.component';

@NgModule({
  declarations: [CurrencyComponent, CurrencyFormComponent, CurrencyTableComponent],
  imports: [CommonModule, CurrencyRoutingModule, SharedModule],
})
export class CurrencyModule {}
