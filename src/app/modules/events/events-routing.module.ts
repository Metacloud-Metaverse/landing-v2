import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { ConcertPageComponent } from './pages/concert-page/concert-page.component';
import { EventDetailPageComponent } from './pages/event-detail-page/event-detail-page.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'event-details', component: EventDetailPageComponent },
  { path: 'concerts', component: ConcertPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
