import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-petty-cash-initialization-form',
  templateUrl: './petty-cash-initialization-form.component.html',
  styleUrls: ['./petty-cash-initialization-form.component.scss']
})
export class PettyCashInitializationFormComponent implements OnInit {
  @Input() activeForm: number;
  constructor() { }

  ngOnInit(): void {
  }

}
