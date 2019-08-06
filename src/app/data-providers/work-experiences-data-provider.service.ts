import { Injectable } from '@angular/core';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesDataProviderService {
  private _defaultWorkExperiences = [
    new WorkExperienceComponent('Software Engineer', 'Programmed in Angular at Motorola Solutions.'),
    new WorkExperienceComponent('Bus Driver', 'Drove a school bus.'),
  ];
  constructor() { }

  saveToServer(workExperiences: WorkExperienceComponent[]) { }

  loadFromServer(): WorkExperienceComponent[] {
    return this._defaultWorkExperiences;
  }
}
