import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashDisbursementTableFormComponent } from './petty-cash-disbursement-table-form.component';

describe('PettyCashDisbursementTableFormComponent', () => {
  let component: PettyCashDisbursementTableFormComponent;
  let fixture: ComponentFixture<PettyCashDisbursementTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashDisbursementTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashDisbursementTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
