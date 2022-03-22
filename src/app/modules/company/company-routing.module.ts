import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaKitPageComponent } from './pages/media-kit-page/media-kit-page.component';

const routes: Routes = [
  { path: 'media-kit', component: MediaKitPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
