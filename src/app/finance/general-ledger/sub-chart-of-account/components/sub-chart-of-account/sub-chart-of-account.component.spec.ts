import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChartOfAccountComponent } from './sub-chart-of-account.component';

describe('SubChartOfAccountComponent', () => {
  let component: SubChartOfAccountComponent;
  let fixture: ComponentFixture<SubChartOfAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubChartOfAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChartOfAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
