import { Component, OnInit, Input } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input('data') _data: WorkExperience;

  constructor() { }

  ngOnInit() {
  }

  get data() { return this._data; }

  trimDate(date: Date): string {
    return date.toLocaleDateString();
  }
}
