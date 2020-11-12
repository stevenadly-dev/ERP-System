import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalVoucherTableComponent } from './journal-voucher-table.component';

describe('JournalVoucherTableComponent', () => {
  let component: JournalVoucherTableComponent;
  let fixture: ComponentFixture<JournalVoucherTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalVoucherTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalVoucherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
