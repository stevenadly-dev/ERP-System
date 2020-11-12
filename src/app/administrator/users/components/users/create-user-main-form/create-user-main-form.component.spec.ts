import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserMainFormComponent } from './create-user-main-form.component';

describe('CreateUserMainFormComponent', () => {
  let component: CreateUserMainFormComponent;
  let fixture: ComponentFixture<CreateUserMainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserMainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
