import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkExperience } from '../models/work-experience';

@Component({
  selector: 'app-add-experience-dialog',
  templateUrl: './add-experience-dialog.component.html',
  styleUrls: ['./add-experience-dialog.component.scss']
})
export class AddExperienceDialogComponent {
  private _workExperience = new WorkExperience("", "");

  constructor(
    public dialogRef: MatDialogRef<AddExperienceDialogComponent>) { }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  get workExperience() { return this._workExperience; }

}
