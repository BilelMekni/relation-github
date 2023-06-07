import { TestBed } from '@angular/core/testing';

import { AllAccompagnantsService } from './all-accompagnants.service';

describe('AllAccompagnantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllAccompagnantsService = TestBed.get(AllAccompagnantsService);
    expect(service).toBeTruthy();
  });
});
