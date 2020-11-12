import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashReimbursementTableComponent } from './petty-cash-reimbursement-table.component';

describe('PettyCashReimbursementTableComponent', () => {
  let component: PettyCashReimbursementTableComponent;
  let fixture: ComponentFixture<PettyCashReimbursementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashReimbursementTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashReimbursementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
