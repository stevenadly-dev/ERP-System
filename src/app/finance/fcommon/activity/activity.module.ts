import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { FcommonRoutingModule } from '../fcommon-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityFormComponent } from './components/activity-form/activity-form.component';

@NgModule({
  declarations: [ActivityComponent, ActivityFormComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    FcommonRoutingModule,
    SharedModule,
  ],
})
export class ActivityModule {}
