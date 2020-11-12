import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-petty-cash-initialization',
  templateUrl: './petty-cash-initialization.component.html',
  styleUrls: ['./petty-cash-initialization.component.scss']
})
export class PettyCashInitializationComponent implements OnInit {
  formIcon: boolean = true;
  updateIcone: boolean = true;
  updateIcone1: boolean = true;
  updateIcone2: boolean = true;
  activeForm:number = 1;
  breadcrumbs: breadcrumb[] = [
    { name: 'Finance' },
    { name: 'Cash Mangement' },
    { name: 'Petty Cash Initialization' },
    { name: 'FINXXX-Create' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
