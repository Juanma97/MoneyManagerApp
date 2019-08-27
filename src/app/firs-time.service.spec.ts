import { TestBed } from '@angular/core/testing';

import { FirsTimeService } from './firs-time.service';

describe('FirsTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirsTimeService = TestBed.get(FirsTimeService);
    expect(service).toBeTruthy();
  });
});
