import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversalVoucherFormComponent } from './reversal-voucher-form.component';

describe('ReversalVoucherFormComponent', () => {
  let component: ReversalVoucherFormComponent;
  let fixture: ComponentFixture<ReversalVoucherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReversalVoucherFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversalVoucherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
