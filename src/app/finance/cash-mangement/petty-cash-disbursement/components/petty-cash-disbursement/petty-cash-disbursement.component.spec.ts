import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashDisbursementComponent } from './petty-cash-disbursement.component';

describe('PettyCashDisbursementComponent', () => {
  let component: PettyCashDisbursementComponent;
  let fixture: ComponentFixture<PettyCashDisbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashDisbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashDisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
