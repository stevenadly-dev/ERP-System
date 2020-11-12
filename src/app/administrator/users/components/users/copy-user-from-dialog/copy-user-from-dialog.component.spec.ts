import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyUserFromDialogComponent } from './copy-user-from-dialog.component';

describe('CopyUserFromDialogComponent', () => {
  let component: CopyUserFromDialogComponent;
  let fixture: ComponentFixture<CopyUserFromDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyUserFromDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyUserFromDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
