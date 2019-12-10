import { TestBed, async, inject } from '@angular/core/testing';

import { AuthveterinarioGuard } from './authveterinario.guard';

describe('AuthveterinarioGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthveterinarioGuard]
    });
  });

  it('should ...', inject([AuthveterinarioGuard], (guard: AuthveterinarioGuard) => {
    expect(guard).toBeTruthy();
  }));
});
