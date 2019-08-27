import { TestBed, async, inject } from '@angular/core/testing';

import { FirstTimeGuard } from './first-time.guard';

describe('FirstTimeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstTimeGuard]
    });
  });

  it('should ...', inject([FirstTimeGuard], (guard: FirstTimeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
