import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashReimbursementTableFormComponent } from './petty-cash-reimbursement-table-form.component';

describe('PettyCashReimbursementTableFormComponent', () => {
  let component: PettyCashReimbursementTableFormComponent;
  let fixture: ComponentFixture<PettyCashReimbursementTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashReimbursementTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashReimbursementTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
