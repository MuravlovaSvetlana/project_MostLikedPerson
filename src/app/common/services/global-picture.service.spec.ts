import { TestBed } from '@angular/core/testing';

import { GlobalPictureService } from './global-picture.service';

describe('GlobalPictureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalPictureService = TestBed.get(GlobalPictureService);
    expect(service).toBeTruthy();
  });
});
