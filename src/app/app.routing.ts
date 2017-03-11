import { Routes } from '@angular/router';
import { StateManagerService } from './service/state/state-manager.service';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LandingComponent } from './pages/landing/landing.component'
import { LoginComponent } from './pages/login/login.component'
import { SignupComponent } from './pages/signup/signup.component'
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/profile/create/create.component';

export const appRoutes : Routes = [
  {
    path        : '',
    component   : LandingComponent,
    pathMatch   : 'full',
    canActivate : [ StateManagerService ],
  },
  {
    path        : 'login',
    component   : LoginComponent,
    pathMatch   : 'full',
    canActivate : [ StateManagerService ],
  },
  {
    path        : 'signup',
    component   : SignupComponent,
    pathMatch   : 'full',
    canActivate : [ StateManagerService ],
  },
  {
    path        : 'profile',
    component   : ProfileComponent,
    pathMatch   : 'full',
    canActivate : [ StateManagerService ],
  },
  {
    path        : 'profile/create',
    component   : CreateComponent,
    pathMatch   : 'full',
    canActivate : [ StateManagerService ],
  },
  {
    path        : 'profile/:id',
    component   : ProfileComponent,
    pathMatch   : 'full',
    canActivate : [ StateManagerService ],
  },
  
  {
    path      : '**',
    component : NotFoundComponent
  }
];
