import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOfAccountSubCategoryTableComponent } from './sub-of-account-sub-category-table.component';

describe('SubOfAccountSubCategoryTableComponent', () => {
  let component: SubOfAccountSubCategoryTableComponent;
  let fixture: ComponentFixture<SubOfAccountSubCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubOfAccountSubCategoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOfAccountSubCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
