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

// Components
import { LoadingComponent } from './components/loading/loading.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

// Modals
import { VideoModalComponent } from './modals/video-modal/video-modal.component';
import { VideoElementComponent } from './components/video-element/video-element.component';

// Pages


@NgModule({
  declarations: [
    MainLayoutComponent,
    LoadingComponent,
    FooterComponent,
    VideoModalComponent,
    NavMenuComponent,
    VideoElementComponent,
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
  ],
  exports: [
    MainLayoutComponent,
    LoadingComponent,
    FooterComponent,
    VideoElementComponent,
  ]
})
export class McCoreModule { }