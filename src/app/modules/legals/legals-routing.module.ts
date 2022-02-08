import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';

const routes: Routes = [
  { path: 'terms-of-service', component: TermsPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalsRoutingModule { }
