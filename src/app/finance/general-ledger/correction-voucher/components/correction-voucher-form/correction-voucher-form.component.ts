import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-correction-voucher-form',
  templateUrl: './correction-voucher-form.component.html',
  styleUrls: ['./correction-voucher-form.component.scss']
})
export class CorrectionVoucherFormComponent implements OnInit {
@Input()s1_active;
  constructor() { }

  ngOnInit(): void {
  }

}
