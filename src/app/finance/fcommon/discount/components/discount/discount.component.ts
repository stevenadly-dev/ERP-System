import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
})
export class DiscountComponent implements OnInit {
  formIcon: boolean = true;
  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'Common' },
    { name: 'discount' },
    { name: 'FIN151-Create' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
