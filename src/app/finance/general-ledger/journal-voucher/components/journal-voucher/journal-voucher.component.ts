import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-journal-voucher',
  templateUrl: './journal-voucher.component.html',
  styleUrls: ['./journal-voucher.component.scss'],
})
export class JournalVoucherCreateComponent implements OnInit {
  formIcon: boolean = true;
  tableIcon: boolean = true;
  updateIcone: boolean = true;

  s1_active: number= 1;
  s3_active: number=1;

  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'general ledger' },
    { name: 'journal voucher' },
    { name: 'FIN141 -Create' },
  ];
  constructor(){}

  ngOnInit(): void {}
}
