import { TestBed } from '@angular/core/testing';

import { JournalsService } from './journals.service';

describe('JournalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JournalsService = TestBed.get(JournalsService);
    expect(service).toBeTruthy();
  });
});
