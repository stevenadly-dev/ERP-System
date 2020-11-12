import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversalVoucherComponent } from './reversal-voucher.component';

describe('ReversalVoucherComponent', () => {
  let component: ReversalVoucherComponent;
  let fixture: ComponentFixture<ReversalVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversalVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversalVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
