import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversalVoucherTableComponent } from './reversal-voucher-table.component';

describe('ReversalVoucherTableComponent', () => {
  let component: ReversalVoucherTableComponent;
  let fixture: ComponentFixture<ReversalVoucherTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversalVoucherTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversalVoucherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
