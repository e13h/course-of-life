import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceDialogComponent } from './add-experience-dialog.component';

describe('AddExperienceDialogComponent', () => {
  let component: AddExperienceDialogComponent;
  let fixture: ComponentFixture<AddExperienceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExperienceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExperienceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
