import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-reversal-voucher',
  templateUrl: './reversal-voucher.component.html',
  styleUrls: ['./reversal-voucher.component.scss']
})
export class ReversalVoucherComponent implements OnInit {

  formIcon:boolean=true;
  tableIcon:boolean=true;
  updateIcone:boolean=true;
  s1_active:number = 1;
  s3_active:number =1;
  breadcrumbs: breadcrumb[] = [
    { name: 'Finance' },
    { name: 'General Ledger' },
    { name: 'Reversal Voucher' },
    { name: 'FINxxx-Create' },
  ];

  constructor(){}
  ngOnInit(){}
}
