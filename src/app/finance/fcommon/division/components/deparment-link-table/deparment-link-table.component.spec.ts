import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentLinkTableComponent } from './deparment-link-table.component';

describe('DeparmentLinkTableComponent', () => {
  let component: DeparmentLinkTableComponent;
  let fixture: ComponentFixture<DeparmentLinkTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparmentLinkTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentLinkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
