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


@NgModule({
  declarations: [
    EventsComponent,
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
