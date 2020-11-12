import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reversal-voucher-table-form',
  templateUrl: './reversal-voucher-table-form.component.html',
  styleUrls: ['./reversal-voucher-table-form.component.scss']
})
export class ReversalVoucherTableFormComponent implements OnInit {
@Input()s3_active;
  constructor() { }

  ngOnInit(): void {
  }

}
