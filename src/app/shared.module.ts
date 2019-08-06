import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
  ]
})
export class SharedModule { }
