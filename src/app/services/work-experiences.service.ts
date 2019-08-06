import { Injectable } from '@angular/core';
import { WorkExperiencesDataProviderService } from '../data-providers/work-experiences-data-provider.service';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';

@Injectable({
  providedIn: 'root'
})
export class WorkExperiencesService {
  private _dataProvider: WorkExperiencesDataProviderService;

  constructor() {
    this._dataProvider = new WorkExperiencesDataProviderService();
  }

  getExperiences(): WorkExperienceComponent[] {
    return this._dataProvider.loadFromServer();
  }

  saveExperiences(workExperiences: WorkExperienceComponent[]) {
    this._dataProvider.saveToServer(workExperiences);
  }
}
