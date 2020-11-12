import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversalVoucherTableFormComponent } from './reversal-voucher-table-form.component';

describe('ReversalVoucherTableFormComponent', () => {
  let component: ReversalVoucherTableFormComponent;
  let fixture: ComponentFixture<ReversalVoucherTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversalVoucherTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversalVoucherTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
