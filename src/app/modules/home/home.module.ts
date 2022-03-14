import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Modules
import { McCoreModule } from '../mc-core/mc-core.module';
import { CountdownModule } from 'ngx-countdown';

// Angular Material
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
/* import { MatSnackBarModule } from '@angular/material/snack-bar'; */
/* import { MatDialogModule } from '@angular/material/dialog'; */
/* import { MatMenuModule } from '@angular/material/menu'; */

// Components
import { StepAComponent } from './sections/step-a/step-a.component';
import { StepBComponent } from './sections/step-b/step-b.component';
import { StepCComponent } from './sections/step-c/step-c.component';
import { StepEComponent } from './sections/step-e/step-e.component';
import { StepDComponent } from './sections/step-d/step-d.component';
import { StepFComponent } from './sections/step-f/step-f.component';
import { StepGComponent } from './sections/step-g/step-g.component';
import { StepHComponent } from './sections/step-h/step-h.component';
import { StepIComponent } from './sections/step-i/step-i.component';
import { StepJComponent } from './sections/step-j/step-j.component';
import { StepKComponent } from './sections/step-k/step-k.component';


@NgModule({
  declarations: [
    HomeComponent,
    StepAComponent,
    StepBComponent,
    StepCComponent,
    StepEComponent,
    StepDComponent,
    StepFComponent,
    StepGComponent,
    StepHComponent,
    StepIComponent,
    StepJComponent,
    StepKComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    McCoreModule,
    CountdownModule,

    // Angular Material
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
