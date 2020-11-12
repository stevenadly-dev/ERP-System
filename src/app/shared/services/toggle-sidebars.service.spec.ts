import { TestBed } from '@angular/core/testing';

import { ToggleSidebarsService } from './toggle-sidebars.service';

describe('ToggleSidebarsService', () => {
  let service: ToggleSidebarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSidebarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
