import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionVoucherTabelComponent } from './correction-voucher-tabel.component';

describe('CorrectionVoucherTabelComponent', () => {
  let component: CorrectionVoucherTabelComponent;
  let fixture: ComponentFixture<CorrectionVoucherTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionVoucherTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionVoucherTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
