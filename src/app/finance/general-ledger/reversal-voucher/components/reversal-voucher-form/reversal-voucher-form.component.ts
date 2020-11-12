import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reversal-voucher-form',
  templateUrl: './reversal-voucher-form.component.html',
  styleUrls: ['./reversal-voucher-form.component.scss']
})
export class ReversalVoucherFormComponent implements OnInit {
@Input()s1_active:number;
  constructor() { }

  ngOnInit(): void {
  }

}
