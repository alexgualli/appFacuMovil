import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  //{ path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  //{ path: 'user', loadChildren: './pages/user/user.module#UserPageModule' },
  { path: 'events', loadChildren: './pages/events/events.module#EventsPageModule' },
  { path: 'slider', loadChildren: './pages/slider/slider.module#SliderPageModule' },
  //{ path: 'settingUser', loadChildren: './pages/setting-user/setting-user.module#SettingUserPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
