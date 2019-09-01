import { TestBed, async, inject } from '@angular/core/testing';

import { NotLoggedInAuthGuard } from './not-logged-in-auth.guard';

describe('NotLoggedInAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotLoggedInAuthGuard]
    });
  });

  it('should ...', inject([NotLoggedInAuthGuard], (guard: NotLoggedInAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
