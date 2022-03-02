import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { McCoreModule } from '../mc-core/mc-core.module';

// Angular Material
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule,
    McCoreModule,

    // Angular Material
    MatTooltipModule
  ]
})
export class TeamModule { }
