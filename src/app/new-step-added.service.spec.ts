import { TestBed } from '@angular/core/testing';

import { NewStepAddedService } from './new-step-added.service';

describe('NewStepAddedService', () => {
  let service: NewStepAddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStepAddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
