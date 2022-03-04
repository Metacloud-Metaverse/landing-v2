import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WorldFaqPageComponent } from './pages/world-faq-page/world-faq-page.component';
import { WorldIntroductionPageComponent } from './pages/world-introduction-page/world-introduction-page.component';

const routes: Routes = [
  { path: '',
    component: DocsComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'world/introduction', component: WorldIntroductionPageComponent },
      { path: 'world/faq', component: WorldFaqPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule { }
