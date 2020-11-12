import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { PettyCashInitializationRoutingModule } from './petty-cash-initialization-routing.module';
import { PettyCashInitializationComponent } from './components/petty-cash-initialization/petty-cash-initialization.component';
import { PettyCashInitializationFormComponent } from './components/petty-cash-initialization-form/petty-cash-initialization-form.component';


@NgModule({
  declarations: [PettyCashInitializationComponent, PettyCashInitializationFormComponent],
  imports: [
    CommonModule,
    PettyCashInitializationRoutingModule,
    SharedModule
  ]
})
export class PettyCashInitializationModule { }
