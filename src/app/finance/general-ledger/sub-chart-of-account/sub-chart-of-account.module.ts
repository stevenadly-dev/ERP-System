import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubChartOfAccountRoutingModule } from './sub-chart-of-account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubChartOfAccountComponent } from './components/sub-chart-of-account/sub-chart-of-account.component';
import { ChartOfAccuntFormComponent } from './components/chart-of-accunt-form/chart-of-accunt-form.component';
import { ChartOfAccuntSubApplicableCoaTableComponent } from './components/chart-of-accunt-sub-applicable-coa-table/chart-of-accunt-sub-applicable-coa-table.component';
import { ChartOfAccuntSubApplicableCurrencyTableComponent } from './components/chart-of-accunt-sub-applicable-currency-table/chart-of-accunt-sub-applicable-currency-table.component';


@NgModule({
  declarations: [SubChartOfAccountComponent, ChartOfAccuntFormComponent, ChartOfAccuntSubApplicableCoaTableComponent, ChartOfAccuntSubApplicableCurrencyTableComponent],
  imports: [
    CommonModule,
    SubChartOfAccountRoutingModule,
    SharedModule
  ]
})
export class SubChartOfAccountModule { }
