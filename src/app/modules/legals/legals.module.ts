import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalsRoutingModule } from './legals-routing.module';

// Pages
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';


@NgModule({
  declarations: [
    TermsPageComponent,
    PrivacyPolicyPageComponent
  ],
  imports: [
    CommonModule,
    LegalsRoutingModule
  ]
})
export class LegalsModule { }
