import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-correction-voucher-tabel-form',
  templateUrl: './correction-voucher-tabel-form.component.html',
  styleUrls: ['./correction-voucher-tabel-form.component.scss']
})
export class CorrectionVoucherTabelFormComponent implements OnInit {
@Input()s3_active;
  constructor() { }

  ngOnInit(): void {
  }

}
