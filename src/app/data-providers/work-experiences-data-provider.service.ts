import { Injectable } from '@angular/core';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesDataProviderService {
  private _defaultWorkExperiences = {
    experiences: [
      { jobTitle: 'Software Engineer', description: 'Programmed in Angular at Motorola Solutions.' },
      { jobTitle: 'Bus Driver', description: 'Drove a school bus.' }
    ]
  };
  constructor() { }

  saveToServer(workExperiences: WorkExperience[]) { }

  loadFromServer(): WorkExperiencesResponse {
    return this._defaultWorkExperiences;
  }
}

export interface WorkExperiencesResponse {
  experiences: {
    jobTitle: string,
    description: string,
  }[]
}
