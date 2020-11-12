import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSupplierInvoiceComponent } from './manual-supplier-invoice.component';

describe('ManualSupplierInvoiceComponent', () => {
  let component: ManualSupplierInvoiceComponent;
  let fixture: ComponentFixture<ManualSupplierInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualSupplierInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSupplierInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
