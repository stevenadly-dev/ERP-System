import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccuntSubApplicableCurrencyTableComponent } from './chart-of-accunt-sub-applicable-currency-table.component';

describe('ChartOfAccuntSubApplicableCurrencyTableComponent', () => {
  let component: ChartOfAccuntSubApplicableCurrencyTableComponent;
  let fixture: ComponentFixture<ChartOfAccuntSubApplicableCurrencyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfAccuntSubApplicableCurrencyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccuntSubApplicableCurrencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
