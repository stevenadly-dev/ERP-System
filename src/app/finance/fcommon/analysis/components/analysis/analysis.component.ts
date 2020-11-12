import { breadcrumb } from 'src/app/shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss'],
})
export class AnalysisComponent implements OnInit {
  formIcon: boolean = true;
  breadcrumbs: breadcrumb[] = [
    { name: '  Finance' },
    { name: 'Common' },
    { name: 'Analysis' },
    { name: 'Fin051-Create' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
