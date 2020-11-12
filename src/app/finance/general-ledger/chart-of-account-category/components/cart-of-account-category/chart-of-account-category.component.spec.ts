import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountCategoryComponent } from './chart-of-account-category.component';

describe('ChartOfAccountCategoryComponent', () => {
  let component: ChartOfAccountCategoryComponent;
  let fixture: ComponentFixture<ChartOfAccountCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartOfAccountCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccountCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
