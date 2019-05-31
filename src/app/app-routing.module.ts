import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'setting-user', loadChildren: './pages/setting-user/setting-user.module#SettingUserPageModule' },
  { path: 'events', loadChildren: './pages/events/events.module#EventsPageModule' },
  { path: 'eventDetails/:id', loadChildren: './pages/eventDetails/eventDetails.module#EventDetailsPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
  { path: 'activity/:id', loadChildren: './pages/activity/activity.module#ActivityPageModule' },
  { path: 'modal-imagenpm', loadChildren: './pages/modal-imagenpm/modal-imagenpm.module#ModalImagenpmPageModule' },
  { path: 'eventDetails/?', loadChildren: './pages/eventDetails/eventDetails.module#EventDetailsPageModule' },





  //{ path: 'settingUser', loadChildren: './pages/setting-user/setting-user.module#SettingUserPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
