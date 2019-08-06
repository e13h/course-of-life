import { Component, OnInit } from '@angular/core';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { WorkExperiencesService } from '../services/work-experiences.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  private _workExperiences: WorkExperienceComponent[];

  constructor(_service: WorkExperiencesService) {
    this._workExperiences = _service.getExperiences();
  }

  ngOnInit() {
  }

  get workExperiences() { return this._workExperiences; }

}
