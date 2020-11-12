import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentMasterComponent } from './deparment-master.component';

describe('DeparmentMasterComponent', () => {
  let component: DeparmentMasterComponent;
  let fixture: ComponentFixture<DeparmentMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparmentMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
