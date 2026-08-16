import { TestBed } from '@angular/core/testing';

import { VerticalStepperRelayService } from './vertical-stepper-relay.service';

describe('VerticalStepperRelayService', () => {
  let service: VerticalStepperRelayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerticalStepperRelayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
