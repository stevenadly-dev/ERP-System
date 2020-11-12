import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashInitializationFormComponent } from './petty-cash-initialization-form.component';

describe('PettyCashInitializationFormComponent', () => {
  let component: PettyCashInitializationFormComponent;
  let fixture: ComponentFixture<PettyCashInitializationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashInitializationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashInitializationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
