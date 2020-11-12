import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionVoucherComponent } from './correction-voucher.component';

describe('CorrectionVoucherComponent', () => {
  let component: CorrectionVoucherComponent;
  let fixture: ComponentFixture<CorrectionVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
