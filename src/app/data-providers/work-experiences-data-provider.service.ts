import { Injectable } from '@angular/core';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesDataProviderService {
  private _defaultWorkExperiences = [
    new WorkExperience('Software Engineer', 'Programmed in Angular at Motorola Solutions.'),
    new WorkExperience('Bus Driver', 'Drove a school bus.'),
  ];
  constructor() { }

  saveToServer(workExperiences: WorkExperience[]) { }

  loadFromServer(): WorkExperience[] {
    return this._defaultWorkExperiences;
  }
}
