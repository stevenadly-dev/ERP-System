import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-cash-box',
  templateUrl: './cash-box.component.html',
  styleUrls: ['./cash-box.component.scss']
})
export class CashBoxComponent implements OnInit {
  formIcon: boolean = true;
  breadcrumbs: breadcrumb[] = [
    { name: 'Finance' },
    { name: 'Cash Mangement' },
    { name: 'Cash Box' },
    { name: 'FINXXX-Create' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
