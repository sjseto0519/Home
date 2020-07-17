import { TestBed } from '@angular/core/testing';

import { EventMediatorServiceService } from './event-mediator-service.service';

describe('EventMediatorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventMediatorServiceService = TestBed.get(EventMediatorServiceService);
    expect(service).toBeTruthy();
  });
});
