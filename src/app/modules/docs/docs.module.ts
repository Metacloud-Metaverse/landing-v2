import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';

// Angular Material
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

// Components
import { ThisIsUsefulComponentComponent } from './components/this-is-useful-component/this-is-useful-component.component';

// Pages
import { WorldIntroductionPageComponent } from './pages/world-introduction-page/world-introduction-page.component';


@NgModule({
  declarations: [
    DocsComponent,
    WorldIntroductionPageComponent,
    ThisIsUsefulComponentComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,

    // Angular Material
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ]
})
export class DocsModule { }
