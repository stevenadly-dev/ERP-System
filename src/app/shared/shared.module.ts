import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { CheckboxRenderer } from '../administrator/users/components/users/users-options/checkbox-render.componnent';

@NgModule({
  declarations: [BreadcrumbsComponent, CheckboxRenderer],
  imports: [
    CommonModule,
    MaterialModule,
    AgGridModule.withComponents([CheckboxRenderer]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
  ],
  exports: [
    MaterialModule,
    AgGridModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbsComponent,
    NgxIntlTelInputModule,
    CheckboxRenderer,
  ],
})
export class SharedModule {}
