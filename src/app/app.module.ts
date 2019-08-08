import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
import { AddExperienceDialogComponent } from './components/add-experience-dialog/add-experience-dialog.component';
import { WorkExperienceListComponent } from './components/work-experience-list/work-experience-list.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    TopBarComponent,
    AddExperienceDialogComponent,
    WorkExperienceListComponent,
    WorkExperienceComponent,
    LandingPageComponent
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
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
