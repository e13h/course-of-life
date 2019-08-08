import { Injectable } from '@angular/core';
import { WorkExperiencesDataAccessService } from './work-experiences-data-access.service';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {
  private _dataProvider: WorkExperiencesDataAccessService;

  constructor() {
    this._dataProvider = new WorkExperiencesDataAccessService();
  }

  getExperiences(): WorkExperience[] {
    let experiences = [];
    this._dataProvider.loadFromServer().experiences.forEach(experience => {
      experiences.push(new WorkExperience(experience.jobTitle, experience.startDate, experience.endDate, experience.description));
    });
    return experiences;
  }

  saveExperiences(workExperiences: WorkExperience[]) {
    this._dataProvider.saveToServer(workExperiences);
  }
}
