import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { McCoreModule } from '../mc-core/mc-core.module';

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
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';

// Directives
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';


@NgModule({
  declarations: [
    HomeComponent,
    ContactSectionComponent,
    IntroSectionComponent,
    ScrollAnimationDirective,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    McCoreModule,

    // Angular Material
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
