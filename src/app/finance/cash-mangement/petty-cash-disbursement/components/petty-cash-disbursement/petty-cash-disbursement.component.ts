import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-petty-cash-disbursement',
  templateUrl: './petty-cash-disbursement.component.html',
  styleUrls: ['./petty-cash-disbursement.component.scss']
})
export class PettyCashDisbursementComponent implements OnInit {
  formIcon: boolean = true;
  updateIcone: boolean = true;
  tableIcone: boolean = true;
  tableFormIcone: boolean = true;
  activeForm:number = 1;
  activeForm2:number = 1;
  breadcrumbs: breadcrumb[] = [
    { name: 'Finance' },
    { name: 'Cash Mangement' },
    { name: 'Petty Cash Disbursement' },
    { name: 'FINXXX-Create' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
