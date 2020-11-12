import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { breadcrumb } from 'src/app/shared/models';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss'],
})
export class DivisionComponent implements OnInit {
  breadcrumbs: breadcrumb[] = [
    { name: 'finance' },
    { name: 'Common' },
    { name: 'Division' },
    { name: 'FINxxx-Create' },
  ];

  s1_active: string = 'division';

  formIcon: boolean = true;
  tableIcon: boolean = true;
  updateIcone: boolean = true;

  constructor() {}
  ngOnInit(): void {}
}
