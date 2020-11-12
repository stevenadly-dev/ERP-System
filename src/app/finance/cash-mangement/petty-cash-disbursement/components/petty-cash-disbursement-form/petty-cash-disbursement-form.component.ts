import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-petty-cash-disbursement-form',
  templateUrl: './petty-cash-disbursement-form.component.html',
  styleUrls: ['./petty-cash-disbursement-form.component.scss']
})
export class PettyCashDisbursementFormComponent implements OnInit {
  @Input() activeForm: number;
  constructor() { }

  ngOnInit(): void {
  }

}
