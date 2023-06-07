import { TestBed } from '@angular/core/testing';

import { AccompagnantService } from './accompagnant.service';

describe('AccompagnantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccompagnantService = TestBed.get(AccompagnantService);
    expect(service).toBeTruthy();
  });
});
