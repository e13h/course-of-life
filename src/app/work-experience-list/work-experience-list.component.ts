import { Component, OnInit } from '@angular/core';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import { WorkExperiencesService } from '../services/work-experiences.service';
import { AddExperienceDialogComponent } from '../add-experience-dialog/add-experience-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.scss']
})
export class WorkExperienceListComponent implements OnInit {
  private _workExperiences: WorkExperienceComponent[];
  
  constructor(_service: WorkExperiencesService, public dialog: MatDialog) {
    this._workExperiences = _service.getExperiences();
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
  ngOnInit() {
  }

}
