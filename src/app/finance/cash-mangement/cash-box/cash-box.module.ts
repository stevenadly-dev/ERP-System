import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CashBoxRoutingModule } from './cash-box-routing.module';
import { CashBoxComponent } from './components/cash-box/cash-box.component';
import { CashBoxFormComponent } from './components/cash-box-form/cash-box-form.component';



@NgModule({
  declarations: [CashBoxComponent, CashBoxFormComponent],
  imports: [
    CommonModule,
    CashBoxRoutingModule,
    SharedModule
  ]
})
export class CashBoxModule { }
