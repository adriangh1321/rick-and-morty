import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EpisodeListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatButtonModule,
  ]
})
export class EpisodeModule { }
