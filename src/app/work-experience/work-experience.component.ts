import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  constructor(private _jobTitle: string, private _description: string) { }

  ngOnInit() {
  }

  get jobTitle() { return this._jobTitle; }
  get description() { return this._description; }

}
