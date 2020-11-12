import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FcommonRoutingModule } from './fcommon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FcommonRoutingModule, SharedModule],
})
export class FcommonModule {}
