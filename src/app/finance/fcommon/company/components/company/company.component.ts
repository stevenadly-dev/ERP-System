import { breadcrumb } from 'src/app/shared/models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  formIcon: Boolean = true;
  checked: boolean = false;

  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'Common' },
    { name: 'company' },
    { name: 'FIN151-Create' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
