import { DivisionComponent } from './components/division/division.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionRoutingModule } from './division-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DivisionFormComponent } from './components/division-form/division-form.component';
import { DeparmentMasterComponent } from './components/deparment-master/deparment-master.component';
import { DeparmentLinkTableComponent } from './components/deparment-link-table/deparment-link-table.component';

@NgModule({
  declarations: [
    DivisionComponent,
    DivisionFormComponent,
    DeparmentMasterComponent,
    DeparmentLinkTableComponent,
  ],
  imports: [CommonModule, DivisionRoutingModule, SharedModule],
})
export class DivisionModule {}
