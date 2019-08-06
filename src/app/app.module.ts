import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SharedModule } from './shared.module';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { AddExperienceDialogComponent } from './add-experience-dialog/add-experience-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    TopBarComponent,
    WorkExperienceComponent,
    AddExperienceDialogComponent
  ],
  entryComponents: [
    AddExperienceDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
