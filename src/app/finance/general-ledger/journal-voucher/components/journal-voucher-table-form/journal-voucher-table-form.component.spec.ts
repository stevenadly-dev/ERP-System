import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalVoucherTableFormComponent } from './journal-voucher-table-form.component';

describe('JournalVoucherTableFormComponent', () => {
  let component: JournalVoucherTableFormComponent;
  let fixture: ComponentFixture<JournalVoucherTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalVoucherTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalVoucherTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
