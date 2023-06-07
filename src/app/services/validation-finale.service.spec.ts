import { TestBed } from '@angular/core/testing';

import { ValidationFinaleService } from './validation-finale.service';

describe('ValidationFinaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationFinaleService = TestBed.get(ValidationFinaleService);
    expect(service).toBeTruthy();
  });
});
