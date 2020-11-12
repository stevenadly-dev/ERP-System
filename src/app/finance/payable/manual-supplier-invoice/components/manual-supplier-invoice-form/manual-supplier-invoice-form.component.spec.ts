import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSupplierInvoiceFormComponent } from './manual-supplier-invoice-form.component';

describe('ManualSupplierInvoiceFormComponent', () => {
  let component: ManualSupplierInvoiceFormComponent;
  let fixture: ComponentFixture<ManualSupplierInvoiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualSupplierInvoiceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSupplierInvoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
