import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  formIcon: boolean = true;
  tableIcon: boolean = true;

  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'Common' },
    { name: 'Currency' },
    { name: 'FIN151-Create' },
  ];
  constructor() {}
  ngOnInit(): void {}
}
