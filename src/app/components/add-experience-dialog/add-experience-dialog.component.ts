import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkExperience } from '../../models/work-experience';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-experience-dialog',
  templateUrl: './add-experience-dialog.component.html',
  styleUrls: ['./add-experience-dialog.component.scss']
})
export class AddExperienceDialogComponent implements OnInit {
  titleFormGroup: FormGroup;
  descriptionFormGroup: FormGroup;
  datepickerFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddExperienceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WorkExperience) { }
  
  ngOnInit(): void {
    this.titleFormGroup = this._formBuilder.group({
      jobTitleCtrl: [this.data.jobTitle, Validators.required]
    });
    this.datepickerFormGroup = this._formBuilder.group({
      startDatepickerCtrl: ['', Validators.required],
      endDatepickerCtrl: ['', Validators.required]
    })
    this.descriptionFormGroup = this._formBuilder.group({
      descriptionCtrl: [this.data.description, Validators.required]
    });
  }

  onSave() {
    this.data.jobTitle = this.titleFormGroup.get('jobTitleCtrl').value;
    this.data.description = this.descriptionFormGroup.get('descriptionCtrl').value;
  }

  onSelectionChange(event: any) {
    this.data.jobTitle = this.titleFormGroup.get('jobTitleCtrl').value;
    this.data.description = this.descriptionFormGroup.get('descriptionCtrl').value;
  }

  getPreview(): WorkExperience[] {
    return [ this.data ];
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
