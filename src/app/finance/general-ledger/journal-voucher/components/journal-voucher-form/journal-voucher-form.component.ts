import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-voucher-form',
  templateUrl: './journal-voucher-form.component.html',
  styleUrls: ['./journal-voucher-form.component.scss']
})
export class JournalVoucherFormComponent implements OnInit {
@Input()s1_active: number;
  constructor() { }

  ngOnInit(): void {
  }

}
