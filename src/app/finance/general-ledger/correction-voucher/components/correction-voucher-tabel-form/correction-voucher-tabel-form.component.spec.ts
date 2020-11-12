import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionVoucherTabelFormComponent } from './correction-voucher-tabel-form.component';

describe('CorrectionVoucherTabelFormComponent', () => {
  let component: CorrectionVoucherTabelFormComponent;
  let fixture: ComponentFixture<CorrectionVoucherTabelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionVoucherTabelFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionVoucherTabelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
