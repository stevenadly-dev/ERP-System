import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-petty-cash-reimbursement',
  templateUrl: './petty-cash-reimbursement.component.html',
  styleUrls: ['./petty-cash-reimbursement.component.scss']
})
export class PettyCashReimbursementComponent implements OnInit {
  formIcon: boolean = true;
  updateIcone: boolean = true;
  tableIcone: boolean = true;
  tableFormIcone: boolean = true;
  activeForm:number = 1;
  activeForm2:number = 1;
  breadcrumbs: breadcrumb[] = [
    { name: 'Finance' },
    { name: 'Cash Mangement' },
    { name: 'Petty Cash Reimbursement' },
    { name: 'FINXXX-Create' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
