import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionVoucherFormComponent } from './correction-voucher-form.component';

describe('CorrectionVoucherFormComponent', () => {
  let component: CorrectionVoucherFormComponent;
  let fixture: ComponentFixture<CorrectionVoucherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionVoucherFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionVoucherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
