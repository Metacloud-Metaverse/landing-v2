import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { McCoreRoutingModule } from './mc-core-routing.module';

// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


// Components
import { LoadingComponent } from './components/loading/loading.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ComingSoonElementComponent } from './components/coming-soon-element/coming-soon-element.component';

// Modals
import { VideoElementComponent } from './components/video-element/video-element.component';
import { SoundElementComponent } from './components/sound-element/sound-element.component';

// Pages


@NgModule({
  declarations: [
    MainLayoutComponent,
    LoadingComponent,
    FooterComponent,
    NavMenuComponent,
    VideoElementComponent,
    ComingSoonElementComponent,
    SoundElementComponent,
  ],
  imports: [
    CommonModule,
    McCoreRoutingModule,
    RouterModule,

    // Angular Material
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MainLayoutComponent,
    LoadingComponent,
    FooterComponent,
    VideoElementComponent,
    ComingSoonElementComponent,
    SoundElementComponent,
  ]
})
export class McCoreModule { }
