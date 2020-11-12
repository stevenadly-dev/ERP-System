import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSupplierInvoiceTableComponent } from './manual-supplier-invoice-table.component';

describe('ManualSupplierInvoiceTableComponent', () => {
  let component: ManualSupplierInvoiceTableComponent;
  let fixture: ComponentFixture<ManualSupplierInvoiceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualSupplierInvoiceTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSupplierInvoiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
