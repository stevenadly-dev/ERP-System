import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-petty-cash-disbursement-table-form',
  templateUrl: './petty-cash-disbursement-table-form.component.html',
  styleUrls: ['./petty-cash-disbursement-table-form.component.scss']
})
export class PettyCashDisbursementTableFormComponent implements OnInit {
  @Input() activeForm: number;
  constructor() { }

  ngOnInit(): void {
  }

}
