import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import { McCoreModule } from '../mc-core/mc-core.module';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';


// Components


@NgModule({
  declarations: [
    IntroComponent,
  ],
  imports: [
    CommonModule,
    IntroRoutingModule,
    McCoreModule,

    // Angular Material
    MatButtonModule,
    MatProgressBarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class IntroModule { }
