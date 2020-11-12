import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TabsService {
  activeLinkIndex = -1;
  navLinks: any[] = [];
  link: any;
  counter: number = 0;
  navLinksSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  navLinksSizeSubject: Subject<number> = new Subject();
  activeLinkIndexSubeject: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);
  constructor(private router: Router) {}

  getLinks() {
    this.navLinksSubject.next(this.navLinks);
  }

  duplicate() {
    this.counter++;
    let tabTitle = 'duplicate ' + this.counter;
    let tabId = 'firstpage';
    let param = 'allow duplicate';
    this.openTab(tabTitle, tabId, param);
  }

  openTab(heading: String, route: String, parameter: any = undefined) {
    console.log('openTab in layout... IN');
    var navFlag = false;
    var tabLength = this.navLinks.length;
    if (parameter != undefined && parameter == 'allow duplicate') {
      navFlag = false;
    } else {
      for (var i = 0; i < this.navLinks.length; i++) {
        if (this.navLinks[i].link == route) {
          navFlag = true;
          if (!this.navLinks[i].parameter || parameter == 'allow duplicate') {
            this.router.navigate([this.navLinks[i].link]).then((nav) => {
              if (nav) {
                this.activeLinkIndex = i;
                this.activeLinkIndexSubeject.next(this.activeLinkIndex);
                this.navLinksSizeSubject.next(this.navLinks.length);
              }
            });
            this.activeLinkIndex = i;
            this.activeLinkIndexSubeject.next(this.activeLinkIndex);
            this.navLinksSizeSubject.next(this.navLinks.length);
          } else {
            this.router
              .navigate([this.navLinks[i].link, this.navLinks[i].parameter])
              .then((nav) => {
                if (nav) {
                  this.activeLinkIndex = i;
                  this.activeLinkIndexSubeject.next(this.activeLinkIndex);
                  this.navLinksSizeSubject.next(this.navLinks.length);
                }
              });
            this.activeLinkIndex = i;
            this.activeLinkIndexSubeject.next(this.activeLinkIndex);
            this.navLinksSizeSubject.next(this.navLinks.length);
          }
          break;
        } else {
          navFlag = false;
        }
      }
    }

    if (navFlag == false) {
      this.navLinks.push({
        label: heading,
        link: route,
        index: tabLength,
        parameter: parameter,
      });
      var i = this.navLinks.length - 1;
      if (!this.navLinks[i].parameter || parameter == 'allow duplicate') {
        this.router.navigate([this.navLinks[tabLength].link]).then((nav) => {
          navFlag = true;
          if (nav) {
            this.activeLinkIndex = tabLength;
            this.activeLinkIndexSubeject.next(this.activeLinkIndex);
            this.navLinksSizeSubject.next(this.navLinks.length);
          }
        });
        this.activeLinkIndex = tabLength;
        this.activeLinkIndexSubeject.next(this.activeLinkIndex);
      } else {
        this.router
          .navigate([this.navLinks[tabLength].link, this.navLinks[i].parameter])
          .then((nav) => {
            navFlag = true;
            if (nav) {
              this.activeLinkIndex = tabLength;
              this.activeLinkIndexSubeject.next(this.activeLinkIndex);
              this.navLinksSizeSubject.next(this.navLinks.length);
            }
          });
        this.activeLinkIndex = tabLength;
        this.activeLinkIndexSubeject.next(this.activeLinkIndex);
        this.navLinksSizeSubject.next(this.navLinks.length);
      }
    }
  }

  closeTab(index: number) {
    var maxTabIndex;
    var res;
    if (this.activeLinkIndex == index) {
      maxTabIndex = this.navLinks.length - 1;
      if (maxTabIndex == 0) {
        this.navLinks.splice(index, 1);
        res = this.router.navigate(['/']);
      } else if (index < maxTabIndex) {
        this.navLinks.splice(index, 1);
        res = this.router.navigate([this.navLinks[index].link]).then((nav) => {
          if (nav) {
            this.activeLinkIndex = index;
            this.activeLinkIndexSubeject.next(this.activeLinkIndex);
            this.navLinksSizeSubject.next(this.navLinks.length);
          }
        });
        this.activeLinkIndex = index;
      } else if (index == maxTabIndex) {
        this.navLinks.splice(index, 1);
        maxTabIndex = this.navLinks.length - 1;
        res = this.router
          .navigate([this.navLinks[maxTabIndex].link])
          .then((nav) => {
            if (nav) {
              this.activeLinkIndex = maxTabIndex;
              this.activeLinkIndexSubeject.next(this.activeLinkIndex);
              this.navLinksSizeSubject.next(this.navLinks.length);
            }
          });
        this.activeLinkIndex = maxTabIndex;
      } else {
        res = this.router.navigate(['/']);
      }
    } else if (this.activeLinkIndex > index) {
      this.navLinks.splice(index, 1);
      this.activeLinkIndex = this.activeLinkIndex - 1;
      this.activeLinkIndexSubeject.next(this.activeLinkIndex);
      this.navLinksSizeSubject.next(this.navLinks.length);
    } else {
      this.navLinks.splice(index, 1);
    }
    if (this.navLinks.length <= 0) {
      this.router.navigate(['']);
    }
    this.navLinksSubject.next(this.navLinks);
    this.activeLinkIndexSubeject.next(this.activeLinkIndex);
  }

  closeOtherTabs(index: number) {
    this.link = this.navLinks[index];
    this.navLinks = [];
    this.navLinks.push(this.link);
    this.router.navigate([this.navLinks[0].link]).then((nav) => {
      if (nav) {
        this.activeLinkIndex = 0;
      }
    });
    this.activeLinkIndex = 0;
    this.link = undefined;
  }

  closeAllTabs() {
    this.activeLinkIndex = -1;
    this.router.navigate(['/']);
    this.navLinks = [];
  }

  activate(index: number) {
    if (!this.navLinks[index].parameter) {
      this.router.navigate([this.navLinks[index].link]).then((nav) => {
        if (nav) {
          this.activeLinkIndex = index;
          this.activeLinkIndexSubeject.next(this.activeLinkIndex);
          this.navLinksSizeSubject.next(this.navLinks.length);
        }
      });
      this.activeLinkIndex = index;
      this.activeLinkIndexSubeject.next(this.activeLinkIndex);
      this.navLinksSizeSubject.next(this.navLinks.length);
    } else {
      this.router
        .navigate([this.navLinks[index].link, this.navLinks[index].parameter])
        .then((nav) => {
          if (nav) {
            this.activeLinkIndex = index;
            this.activeLinkIndexSubeject.next(this.activeLinkIndex);
            this.navLinksSizeSubject.next(this.navLinks.length);
          }
        });
      this.activeLinkIndex = index;
      this.activeLinkIndexSubeject.next(this.activeLinkIndex);
      this.navLinksSizeSubject.next(this.navLinks.length);
    }
  }
}
