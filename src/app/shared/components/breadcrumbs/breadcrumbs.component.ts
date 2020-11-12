import { Component, Input, OnInit } from '@angular/core';
import { breadcrumb } from '../../models';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() breadcrumbsArr: breadcrumb[];
  constructor() {}

  ngOnInit(): void {}
}
