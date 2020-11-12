import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashMangementRoutingModule } from './cash-mangement-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CashMangementRoutingModule,
    SharedModule
  ]
})
export class CashMangementModule { }
