import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-form',
  templateUrl: './currency-form.component.html',
  styleUrls: ['./currency-form.component.scss'],
})
export class CurrencyFormComponent implements OnInit {
  tableIcon: boolean = true;
  checked: boolean = false;
  holder = '0123';

  constructor() {}
  check() {
    this.checked = true;
    this.holder = '';
  }

  ngOnInit(): void {}
}
