import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-petty-cash-reimbursement-table-form',
  templateUrl: './petty-cash-reimbursement-table-form.component.html',
  styleUrls: ['./petty-cash-reimbursement-table-form.component.scss']
})
export class PettyCashReimbursementTableFormComponent implements OnInit {
  @Input() activeForm: number;
  constructor() { }

  ngOnInit(): void {
  }

}
