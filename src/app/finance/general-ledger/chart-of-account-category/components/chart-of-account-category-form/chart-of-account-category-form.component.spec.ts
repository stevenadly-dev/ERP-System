import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountCategoryFormComponent } from './chart-of-account-category-form.component';

describe('ChartOfAccountCategoryFormComponent', () => {
  let component: ChartOfAccountCategoryFormComponent;
  let fixture: ComponentFixture<ChartOfAccountCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfAccountCategoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccountCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
