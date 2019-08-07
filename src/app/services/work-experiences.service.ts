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
    return this._dataProvider.loadFromServer();
  }

  saveExperiences(workExperiences: WorkExperience[]) {
    this._dataProvider.saveToServer(workExperiences);
  }
}
