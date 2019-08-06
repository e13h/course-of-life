import { TestBed } from '@angular/core/testing';

import { WorkExperiencesService } from './work-experiences.service';

describe('WorkExperiencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkExperiencesService = TestBed.get(WorkExperiencesService);
    expect(service).toBeTruthy();
  });
});
