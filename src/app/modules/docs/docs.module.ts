import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';

// Angular Material
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


// Components
import { ThisIsUsefulComponentComponent } from './components/this-is-useful-component/this-is-useful-component.component';

// Pages
import { WorldIntroductionPageComponent } from './pages/world-introduction-page/world-introduction-page.component';
import { WorldFaqPageComponent } from './pages/world-faq-page/world-faq-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


@NgModule({
  declarations: [
    DocsComponent,
    WorldIntroductionPageComponent,
    ThisIsUsefulComponentComponent,
    WorldFaqPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,

    // Angular Material
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class DocsModule { }
