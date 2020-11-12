import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersForm2Component } from './users-form2.component';

describe('UsersForm2Component', () => {
  let component: UsersForm2Component;
  let fixture: ComponentFixture<UsersForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
