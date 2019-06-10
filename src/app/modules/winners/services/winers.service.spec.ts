import { TestBed } from '@angular/core/testing';

import { WinersService } from './winers.service';

describe('WinersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WinersService = TestBed.get(WinersService);
    expect(service).toBeTruthy();
  });
});
