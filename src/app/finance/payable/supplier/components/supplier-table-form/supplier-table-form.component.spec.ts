import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierTableFormComponent } from './supplier-table-form.component';

describe('SupplierTableFormComponent', () => {
  let component: SupplierTableFormComponent;
  let fixture: ComponentFixture<SupplierTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierTableFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
