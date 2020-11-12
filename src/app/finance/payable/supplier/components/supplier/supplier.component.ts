import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  formIcon: boolean = true;
  tableIcon: boolean = true;
  tableFormIcone: boolean = true;
  breadcrumbs: breadcrumb[] = [
    { name: 'Finance' },
    { name: 'Payable' },
    { name: 'Supplier' },
    { name: 'FINXXX-Create' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
