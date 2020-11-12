import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-of-account-category',
  templateUrl: './chart-of-account-category.component.html',
  styleUrls: ['./chart-of-account-category.component.scss'],
})
export class ChartOfAccountCategoryComponent implements OnInit {
  formIcon: boolean = true;
  tableIcon: boolean = true;
  checked: boolean = true;

  constructor() {}
  ngOnInit() {}
}
