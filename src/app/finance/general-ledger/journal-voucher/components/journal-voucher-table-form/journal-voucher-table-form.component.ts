import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal-voucher-table-form',
  templateUrl: './journal-voucher-table-form.component.html',
  styleUrls: ['./journal-voucher-table-form.component.scss']
})
export class JournalVoucherTableFormComponent implements OnInit {
@Input()s3_active:number;
  constructor() { }

  ngOnInit(): void {
  }

}
