import { TestBed } from '@angular/core/testing';

import { WorkExperiencesDataAccessService } from './work-experiences-data-access.service';

describe('WorkExperiencesDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkExperiencesDataAccessService = TestBed.get(WorkExperiencesDataAccessService);
    expect(service).toBeTruthy();
  });
});
