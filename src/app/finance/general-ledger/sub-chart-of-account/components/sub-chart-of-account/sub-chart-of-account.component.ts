import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-sub-chart-of-account',
  templateUrl: './sub-chart-of-account.component.html',
  styleUrls: ['./sub-chart-of-account.component.scss']
})
export class SubChartOfAccountComponent implements OnInit {
  s2_active :number =1;

  formIcon:boolean=true;
  tableIcon:boolean=true;
  checked:boolean=false;
  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'general ledger' },
    { name: 'sub chart of account' },
    { name: 'FINxxx-Create' },
  ];
  constructor(){}
    ngOnInit(){}
}
