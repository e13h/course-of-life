import { TestBed } from '@angular/core/testing';

import { WorkExperiencesDataProviderService } from './work-experiences-data-provider.service';

describe('WorkExperiencesDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkExperiencesDataProviderService = TestBed.get(WorkExperiencesDataProviderService);
    expect(service).toBeTruthy();
  });
});
