import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashReimbursementFormComponent } from './petty-cash-reimbursement-form.component';

describe('PettyCashReimbursementFormComponent', () => {
  let component: PettyCashReimbursementFormComponent;
  let fixture: ComponentFixture<PettyCashReimbursementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashReimbursementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashReimbursementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
