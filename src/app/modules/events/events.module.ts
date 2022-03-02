import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ConcertsModalComponent } from './modals/concerts-modal/concerts-modal.component';
import { TheatersModalComponent } from './modals/theaters-modal/theaters-modal.component';
import { PodcastsModalComponent } from './modals/podcasts-modal/podcasts-modal.component';
import { TournamentsModalComponent } from './modals/tournaments-modal/tournaments-modal.component';
import { GamesModalComponent } from './modals/games-modal/games-modal.component';


@NgModule({
  declarations: [
    EventsComponent,
    ConcertsModalComponent,
    TheatersModalComponent,
    PodcastsModalComponent,
    TournamentsModalComponent,
    GamesModalComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
