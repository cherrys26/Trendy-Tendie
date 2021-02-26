import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      { path: 'good-sentiment', loadChildren: () => import('../pages/good-sentiment/good-sentiment.module').then(m => m.GoodSentimentPageModule) },
      { path: 'bad-sentiment', loadChildren: () => import('../pages/bad-sentiment/bad-sentiment.module').then(m => m.BadSentimentPageModule) },
      { path: 'watchlist', loadChildren: () => import('../pages/watchlist/watchlist.module').then(m => m.WatchlistPageModule) },
      { path: 'notifications', loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule) },
      { path: 'settings', loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule) },
      { path: '', loadChildren: () => import('../pages/watchlist/watchlist.module').then(m => m.WatchlistPageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
