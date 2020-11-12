import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccuntSubApplicableCoaTableComponent } from './chart-of-accunt-sub-applicable-coa-table.component';

describe('ChartOfAccuntSubApplicableCoaTableComponent', () => {
  let component: ChartOfAccuntSubApplicableCoaTableComponent;
  let fixture: ComponentFixture<ChartOfAccuntSubApplicableCoaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfAccuntSubApplicableCoaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccuntSubApplicableCoaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
