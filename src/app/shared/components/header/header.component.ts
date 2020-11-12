import { ToggleSidebarsService } from './../../services/toggle-sidebars.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  responsiveLeftNotActive: boolean = false;
  responsiveRighttNotActive: boolean = false;

  constructor(private ToggleSidebarsService: ToggleSidebarsService) {}

  ngOnInit(): void {}

  leftSideToggle() {
    this.ToggleSidebarsService.toggleLeftSideBar.emit(
      this.responsiveLeftNotActive
    );
    this.responsiveLeftNotActive = !this.responsiveLeftNotActive;
  }
  rightSideToggle() {
    this.ToggleSidebarsService.toggleRightSideBar.emit(
      this.responsiveRighttNotActive
    );
    this.responsiveRighttNotActive = !this.responsiveRighttNotActive;
  }
}
