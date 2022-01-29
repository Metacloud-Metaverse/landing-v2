import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';

// Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

// Components
import { StarsElementComponent } from './components/stars-element/stars-element.component';
import { LineSpeedElementComponent } from './components/line-speed-element/line-speed-element.component';


@NgModule({
  declarations: [
    IntroComponent,
    StarsElementComponent,
    LineSpeedElementComponent
  ],
  imports: [
    CommonModule,
    IntroRoutingModule,

    // Angular Material
    MatButtonModule
  ]
})
export class IntroModule { }
