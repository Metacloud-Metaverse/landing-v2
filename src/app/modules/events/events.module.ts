import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Modules
import { DragScrollModule } from 'ngx-drag-scroll';

// Pages
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';

// Components

// Modals
import { TournamentsModalComponent } from './modals/tournaments-modal/tournaments-modal.component';
import { ConcertsModalComponent } from './modals/concerts-modal/concerts-modal.component';
import { TheatersModalComponent } from './modals/theaters-modal/theaters-modal.component';
import { PodcastsModalComponent } from './modals/podcasts-modal/podcasts-modal.component';
import { GamesModalComponent } from './modals/games-modal/games-modal.component';


@NgModule({
  declarations: [
    EventsComponent,
    ConcertsModalComponent,
    TheatersModalComponent,
    PodcastsModalComponent,
    TournamentsModalComponent,
    GamesModalComponent,
    EventDetailPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,

    // Modules
    DragScrollModule,

    // Angular Material
    MatIconModule,
    MatButtonModule
  ]
})
export class EventsModule { }
