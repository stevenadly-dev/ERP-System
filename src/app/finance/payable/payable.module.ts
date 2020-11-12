import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PayableRoutingModule } from './payable-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PayableRoutingModule,
    SharedModule
  ]
})
export class PayableModule { }
