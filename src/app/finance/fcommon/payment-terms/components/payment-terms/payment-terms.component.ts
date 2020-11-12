import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-payment-terms',
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.scss'],
})
export class PaymentTermsComponent implements OnInit {
  formIcon: boolean = true;
  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'Common' },
    { name: 'Payment Terms' },
    { name: 'FINxxx-Create' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
