import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-correction-voucher',
  templateUrl: './correction-voucher.component.html',
  styleUrls: ['./correction-voucher.component.scss']
})
export class CorrectionVoucherComponent implements OnInit {
  formIcon:boolean=true;
  tableIcon:boolean=true;
  updateIcone:boolean=true;
  s1_active:number=1;
  s3_active:number=1;
  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'General Ledger' },
    { name: 'Correction Voucher' },
    { name: 'FINxxx-Create' },
  ];

constructor(){}
ngOnInit(){}

}
