import { breadcrumb } from './../../../../shared/models/breadcrumb.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  formIcon: boolean = true;
  form2Icon: boolean = true;
  optionsIcon: boolean = true;
  activeForm: number = 1;
  activeForm2: number = 1;
  activeForm3: number = 1;
  breadcrumbs: breadcrumb[] = [
    { name: 'Administrator' },
    { name: 'Users' },
    { name: 'List' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
