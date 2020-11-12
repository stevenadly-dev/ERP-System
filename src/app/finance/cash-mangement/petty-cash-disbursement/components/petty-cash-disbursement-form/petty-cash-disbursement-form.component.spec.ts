import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashDisbursementFormComponent } from './petty-cash-disbursement-form.component';

describe('PettyCashDisbursementFormComponent', () => {
  let component: PettyCashDisbursementFormComponent;
  let fixture: ComponentFixture<PettyCashDisbursementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashDisbursementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashDisbursementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
