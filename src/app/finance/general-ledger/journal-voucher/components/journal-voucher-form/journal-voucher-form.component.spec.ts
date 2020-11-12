import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalVoucherFormComponent } from './journal-voucher-form.component';

describe('JournalVoucherFormComponent', () => {
  let component: JournalVoucherFormComponent;
  let fixture: ComponentFixture<JournalVoucherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JournalVoucherFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalVoucherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
