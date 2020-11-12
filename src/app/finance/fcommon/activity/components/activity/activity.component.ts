import { breadcrumb } from 'src/app/shared/models';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  formIcon: boolean = true;
  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'Common' },
    { name: 'Activity' },
    { name: 'FIN151-Create' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
