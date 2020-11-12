import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSupplierInvoiceTableFormComponent } from './manual-supplier-invoice-table-form.component';

describe('ManualSupplierInvoiceTableFormComponent', () => {
  let component: ManualSupplierInvoiceTableFormComponent;
  let fixture: ComponentFixture<ManualSupplierInvoiceTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualSupplierInvoiceTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSupplierInvoiceTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
