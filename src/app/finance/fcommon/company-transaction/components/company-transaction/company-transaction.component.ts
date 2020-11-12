import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-company-transaction',
  templateUrl: './company-transaction.component.html',
  styleUrls: ['./company-transaction.component.scss'],
})
export class CompanyTransactionComponent implements OnInit {
  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'Common' },
    { name: 'Company Transaction' },
    { name: 'Fin021-Create' },
  ];
  formIcon: boolean = true;
  tableIcon: boolean = true;

  constructor() {}
  ngOnInit(): void {}
}
