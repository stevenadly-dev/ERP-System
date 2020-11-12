import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-petty-cash-reimbursement-form',
  templateUrl: './petty-cash-reimbursement-form.component.html',
  styleUrls: ['./petty-cash-reimbursement-form.component.scss']
})
export class PettyCashReimbursementFormComponent implements OnInit {
  @Input() activeForm: number;
  constructor() { }

  ngOnInit(): void {
  }

}
