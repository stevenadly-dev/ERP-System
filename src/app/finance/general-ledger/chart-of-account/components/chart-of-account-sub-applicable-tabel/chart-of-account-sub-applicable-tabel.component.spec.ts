import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountSubApplicableTabelComponent } from './chart-of-account-sub-applicable-tabel.component';

describe('ChartOfAccountSubApplicableTabelComponent', () => {
  let component: ChartOfAccountSubApplicableTabelComponent;
  let fixture: ComponentFixture<ChartOfAccountSubApplicableTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfAccountSubApplicableTabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccountSubApplicableTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
