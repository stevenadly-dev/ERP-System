import { TabsService } from './../../services/tabs.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.scss'],
})
export class DynamicTabsComponent implements OnInit {
  activeLinkIndex: number = -1;
  navLinks: any[] = [];
  link: any;
  counter: number = 0;
  tabsSize: number = 0;

  constructor(private router: Router, private TabsService: TabsService) {}
  closeTab(x: number) {
    this.TabsService.closeTab(x);
  }
  activate(x: number) {
    this.TabsService.activate(x);
  }
  openLink() {}
  getLinks() {}
  ngOnInit(): void {
    this.TabsService.getLinks();
    this.TabsService.navLinksSubject.subscribe((links) => {
      this.navLinks = links;
    });

    this.TabsService.activeLinkIndexSubeject.subscribe((navLinkIndex: any) => {
      this.activeLinkIndex = navLinkIndex;
    });

    this.TabsService.navLinksSizeSubject.subscribe((res) => {
      console.log('size : ', res);
      this.tabsSize = res;
    });
  }
}
