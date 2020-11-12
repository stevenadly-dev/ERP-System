import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashBoxFormComponent } from './cash-box-form.component';

describe('CashBoxFormComponent', () => {
  let component: CashBoxFormComponent;
  let fixture: ComponentFixture<CashBoxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashBoxFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashBoxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
