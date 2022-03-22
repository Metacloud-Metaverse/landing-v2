import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';

// Angular Material
import {ClipboardModule} from '@angular/cdk/clipboard';

// Pages
import { MediaKitPageComponent } from './pages/media-kit-page/media-kit-page.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [

    MediaKitPageComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,

    // Angular Material
    ClipboardModule,
    MatTooltipModule,
  ]
})
export class CompanyModule { }
