import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      { path: 'stocks', loadChildren: () => import('../pages/stocks/stocks.module').then(m => m.StocksPageModule) },
      { path: 'crypto', loadChildren: () => import('../pages/crypto/crypto.module').then(m => m.CryptoPageModule) },
      { path: 'watchlist', loadChildren: () => import('../pages/watchlist/watchlist.module').then(m => m.WatchlistPageModule) },
      { path: 'notifications', loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule) },
      { path: 'settings', loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule) },
      { path: '', loadChildren: () => import('../pages/watchlist/watchlist.module').then(m => m.WatchlistPageModule) }
    ]
  },
  { path: ':ticker', loadChildren: () => import('../pages/charts/charts.module').then(m => m.ChartsPageModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
