import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTransactionTabelComponent } from './company-transaction-tabel.component';

describe('CompanyTransactionTabelComponent', () => {
  let component: CompanyTransactionTabelComponent;
  let fixture: ComponentFixture<CompanyTransactionTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyTransactionTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTransactionTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
