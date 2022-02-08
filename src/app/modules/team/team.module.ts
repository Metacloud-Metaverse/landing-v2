import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { McCoreModule } from '../mc-core/mc-core.module';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    McCoreModule,

  ]
})
export class TeamModule { }
