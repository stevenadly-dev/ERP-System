import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintoutsDialogComponent } from './printouts-dialog.component';

describe('PrintoutsDialogComponent', () => {
  let component: PrintoutsDialogComponent;
  let fixture: ComponentFixture<PrintoutsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintoutsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintoutsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
