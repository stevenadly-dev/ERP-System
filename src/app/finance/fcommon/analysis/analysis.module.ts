import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { AnalysisFormComponent } from './components/analysis-form/analysis-form.component';

@NgModule({
  declarations: [AnalysisComponent, AnalysisFormComponent],
  imports: [CommonModule, AnalysisRoutingModule, SharedModule],
})
export class AnalysisModule {}
