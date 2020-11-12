import { CorrectionVoucherComponent } from './components/correction-voucher/correction-voucher.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrectionVoucherRoutingModule } from './correction-voucher-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CorrectionVoucherFormComponent } from './components/correction-voucher-form/correction-voucher-form.component';
import { CorrectionVoucherTabelComponent } from './components/correction-voucher-tabel/correction-voucher-tabel.component';
import { CorrectionVoucherTabelFormComponent } from './components/correction-voucher-tabel-form/correction-voucher-tabel-form.component';


@NgModule({
  declarations: [CorrectionVoucherComponent, CorrectionVoucherFormComponent, CorrectionVoucherTabelComponent, CorrectionVoucherTabelFormComponent],
  imports: [
    CommonModule,
    CorrectionVoucherRoutingModule,
    SharedModule
  ]
})
export class CorrectionVoucherModule { }
