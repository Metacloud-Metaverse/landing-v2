import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }, { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule) }, { path: 'team', loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule) }, { path: 'partners', loadChildren: () => import('./modules/partners/partners.module').then(m => m.PartnersModule) }, { path: 'mc-core', loadChildren: () => import('./modules/mc-core/mc-core.module').then(m => m.McCoreModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
