import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
import { AddExperienceDialogComponent } from './add-experience-dialog/add-experience-dialog.component';
import { WorkExperienceListComponent } from './work-experience-list/work-experience-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    TopBarComponent,
    AddExperienceDialogComponent,
    WorkExperienceListComponent
  ],
  entryComponents: [
    AddExperienceDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
