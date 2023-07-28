import { TestBed } from '@angular/core/testing';

import { ProfileAuthServiceService } from './auth-service';

describe('AuthServiceService', () => {
  let service: ProfileAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
  
