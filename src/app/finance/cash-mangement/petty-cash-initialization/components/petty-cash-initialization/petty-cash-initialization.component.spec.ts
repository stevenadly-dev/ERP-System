import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashInitializationComponent } from './petty-cash-initialization.component';

describe('PettyCashInitializationComponent', () => {
  let component: PettyCashInitializationComponent;
  let fixture: ComponentFixture<PettyCashInitializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PettyCashInitializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashInitializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
