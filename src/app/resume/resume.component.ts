import { Component, OnInit } from '@angular/core';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { WorkExperiencesService } from '../services/work-experiences.service';
import { MatDialog } from '@angular/material/dialog';
import { AddExperienceDialogComponent } from '../add-experience-dialog/add-experience-dialog.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  private _workExperiences: WorkExperienceComponent[];

  constructor(_service: WorkExperiencesService, public dialog: MatDialog) {
    this._workExperiences = _service.getExperiences();
  }

  ngOnInit() {
  }

  get workExperiences() { return this._workExperiences; }

  openDialogAddExperience(): void {
    const dialogRef = this.dialog.open(AddExperienceDialogComponent, { width: '550px' });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the dialog was closed');
      if (result != null)
        this._workExperiences.push(result);
    })
  }
}
