import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccuntFormComponent } from './chart-of-accunt-form.component';

describe('ChartOfAccuntFormComponent', () => {
  let component: ChartOfAccuntFormComponent;
  let fixture: ComponentFixture<ChartOfAccuntFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfAccuntFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccuntFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
