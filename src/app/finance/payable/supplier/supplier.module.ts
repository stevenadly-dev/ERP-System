import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SupplierTableComponent } from './components/supplier-table/supplier-table.component';
import { SupplierTableFormComponent } from './components/supplier-table-form/supplier-table-form.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';


@NgModule({
  declarations: [SupplierComponent, SupplierTableComponent, SupplierTableFormComponent, SupplierFormComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    SharedModule
  ]
})
export class SupplierModule { }
