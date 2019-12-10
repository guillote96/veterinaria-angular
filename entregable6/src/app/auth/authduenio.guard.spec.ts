import { TestBed, async, inject } from '@angular/core/testing';

import { AuthduenioGuard } from './authduenio.guard';

describe('AuthduenioGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthduenioGuard]
    });
  });

  it('should ...', inject([AuthduenioGuard], (guard: AuthduenioGuard) => {
    expect(guard).toBeTruthy();
  }));
});
