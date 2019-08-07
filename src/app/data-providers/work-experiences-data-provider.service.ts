import { Injectable } from '@angular/core';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesDataProviderService {
  private _defaultWorkExperiences = {
    experiences: [
      {
        jobTitle: 'Software Engineer',
        startDate: new Date(2019, 5, 20),
        endDate: new Date(2019, 8, 9),
        description: 'Programmed in Angular at Motorola Solutions.'
      },
      {
        jobTitle: 'Bus Driver',
        startDate: new Date(2014, 9, 1),
        endDate: new Date(2017, 8, 1),
        description: 'Drove a school bus.'
      }
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
    startDate: Date,
    endDate: Date,
    description: string,
  }[]
}
