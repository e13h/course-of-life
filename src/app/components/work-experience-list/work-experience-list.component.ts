import { Component, OnInit, Input } from '@angular/core';
import { WorkExperiencesService } from '../../services/work-experiences.service';
import { AddExperienceDialogComponent } from '../add-experience-dialog/add-experience-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { WorkExperience } from '../../models/work-experience';

@Component({
  selector: 'app-work-experience-list',
  templateUrl: './work-experience-list.component.html',
  styleUrls: ['./work-experience-list.component.scss']
})
export class WorkExperienceListComponent implements OnInit {
  @Input('workExperiences') private _workExperiences: WorkExperience[];
  @Input('isEditable') private _isEditable: boolean;
  
  constructor(public dialog: MatDialog) { }

  get workExperiences() { return this._workExperiences; }

  openDialogAddExperience(): void {
    const dialogRef = this.dialog.open(AddExperienceDialogComponent, {
      width: '550px',
      data: new WorkExperience()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null)
        this._workExperiences.push(result);
    })
  }
  ngOnInit() {
  }

  trimDate(date: Date): string {
    return date.toLocaleDateString();
  }

  get isEditable() { return this._isEditable; }
}
