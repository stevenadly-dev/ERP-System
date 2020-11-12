import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashDisbursementTableComponent } from './petty-cash-disbursement-table.component';

describe('PettyCashDisbursementTableComponent', () => {
  let component: PettyCashDisbursementTableComponent;
  let fixture: ComponentFixture<PettyCashDisbursementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashDisbursementTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashDisbursementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
