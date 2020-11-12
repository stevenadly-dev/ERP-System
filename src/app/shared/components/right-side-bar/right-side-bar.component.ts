import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent implements OnInit {
  constructor() { }

  taskIcon: boolean = true;
  notesIcon: boolean = true;

  today: boolean = false;
  tomorrow: boolean = false;
  nextWeek: boolean = false;
  month: boolean = false;

  note1: boolean = false;
  note2: boolean = false;

  ngOnInit(): void {
  }

}
