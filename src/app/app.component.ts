import { TabsService } from './shared/services/tabs.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleSidebarsService } from './shared/services/toggle-sidebars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  responsiveLeftSidebarNotActive: boolean = true;
  responsiveRightSidebarNotActive: boolean = true;

  rightSideSubscription: Subscription;
  leftSideSubscription: Subscription;
  constructor(private ToggleSidebarsService: ToggleSidebarsService) {}
  ngOnInit(): void {
    this.toggleLeftSideSubscribtion();
    this.toggleRightSideSubScription();
  }
  toggleLeftSideSubscribtion() {
    this.leftSideSubscription = this.ToggleSidebarsService.toggleLeftSideBar.subscribe(
      (res) => {
        this.responsiveLeftSidebarNotActive = res;
      }
    );
  }
  toggleRightSideSubScription() {
    this.rightSideSubscription = this.ToggleSidebarsService.toggleRightSideBar.subscribe(
      (res) => {
        this.responsiveRightSidebarNotActive = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.leftSideSubscription.unsubscribe();
    this.rightSideSubscription.unsubscribe();
  }
}
