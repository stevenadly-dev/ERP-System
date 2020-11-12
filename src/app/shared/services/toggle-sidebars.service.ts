import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleSidebarsService {
  toggleLeftSideBar: EventEmitter<boolean> = new EventEmitter();
  toggleRightSideBar: EventEmitter<boolean> = new EventEmitter();
  constructor() {}
}
