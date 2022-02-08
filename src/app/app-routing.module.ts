import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/mc-core/components/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/intro/intro.module').then(m => m.IntroModule), data: { preload: true }},
      { path: 'start', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), data: { preload: true }},
      { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule), data: { preload: true }},
      { path: 'team', loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule), data: { preload: true }},
      { path: 'partners', loadChildren: () => import('./modules/partners/partners.module').then(m => m.PartnersModule), data: { preload: true }},
      { path: 'legals', loadChildren: () => import('./modules/legals/legals.module').then(m => m.LegalsModule) },
      { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
    ]
  },
  { path: 'page-not-found', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule), data: { preload: true }},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
