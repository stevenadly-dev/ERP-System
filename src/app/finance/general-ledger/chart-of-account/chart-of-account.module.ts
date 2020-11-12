import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartOfAccountRoutingModule } from './chart-of-account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChartOfAccountComponent } from './components/chart-of-account/chart-of-account.component';
import { ChartOfAccountFormComponent } from './components/chart-of-account-form/chart-of-account-form.component';
import { ChartOfAccountSubApplicableTabelComponent } from './components/chart-of-account-sub-applicable-tabel/chart-of-account-sub-applicable-tabel.component';

@NgModule({
  declarations: [ChartOfAccountComponent, ChartOfAccountFormComponent, ChartOfAccountSubApplicableTabelComponent],
  imports: [CommonModule, ChartOfAccountRoutingModule, SharedModule],
})
export class ChartOfAccountModule {}
