import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-chart-of-account',
  templateUrl: './chart-of-account.component.html',
  styleUrls: ['./chart-of-account.component.scss'],
})
export class ChartOfAccountComponent implements OnInit {
  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'General Ledger' },
    { name: 'Chart Of Accont' },
    { name: 'FINxxx-Create' },
  ];

  formIcon: boolean = true;
  tableIcon: boolean = true;
  checked: boolean = true;

  constructor() {}
  ngOnInit(): void {}
}
