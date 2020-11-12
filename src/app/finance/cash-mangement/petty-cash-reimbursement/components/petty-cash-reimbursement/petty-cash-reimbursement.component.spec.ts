import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashReimbursementComponent } from './petty-cash-reimbursement.component';

describe('PettyCashReimbursementComponent', () => {
  let component: PettyCashReimbursementComponent;
  let fixture: ComponentFixture<PettyCashReimbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashReimbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashReimbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
