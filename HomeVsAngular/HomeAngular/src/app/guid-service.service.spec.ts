import { TestBed } from '@angular/core/testing';

import { GuidServiceService } from './guid-service.service';

describe('GuidServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuidServiceService = TestBed.get(GuidServiceService);
    expect(service).toBeTruthy();
  });
});
