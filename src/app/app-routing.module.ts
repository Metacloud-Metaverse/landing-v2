import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/mc-core/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule) },
      { path: 'team', loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule) },
      { path: 'partners', loadChildren: () => import('./modules/partners/partners.module').then(m => m.PartnersModule) },
    ]
  },
  { path: 'page-not-found', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule), data: { preload: true }},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
