import { Component, OnInit } from '@angular/core';

import { WorkExperiencesService } from '../services/work-experiences.service';
import { WorkExperience } from '../models/work-experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  _workExperiences: WorkExperience[];
  
  constructor(service: WorkExperiencesService) {
    this._workExperiences = service.getExperiences();
  }

  get workExperiences() { return this._workExperiences; }
  ngOnInit() { }
}
