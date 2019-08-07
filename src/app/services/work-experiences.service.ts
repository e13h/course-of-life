import { Injectable } from '@angular/core';
import { WorkExperiencesDataProviderService } from '../data-providers/work-experiences-data-provider.service';
import { WorkExperience } from '../models/work-experience';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {
  private _dataProvider: WorkExperiencesDataProviderService;

  constructor() {
    this._dataProvider = new WorkExperiencesDataProviderService();
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
