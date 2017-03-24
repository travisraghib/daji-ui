import { Routes } from '@angular/router';
import { StateManagerService } from './service/state/state-manager.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/profile/create/create.component';
import { PhotoComponent } from './pages/profile/create/photo/photo.component';
import { UserComponent } from './pages/profile/create/user/user.component';
import { AboutComponent } from './pages/profile/create/about/about.component';

export const appRoutes : Routes = [
  {
    path      : '',
    component : LandingComponent,
    pathMatch : 'full',
  },
  {
    path      : 'login',
    component : LoginComponent,
    pathMatch : 'full',
  },
  {
    path      : 'signup',
    component : SignupComponent,
    pathMatch : 'full',
  },
  {
    path        : 'profile',
    canActivate : [ StateManagerService ],
    children : [
      {
        path: '',
        component   : ProfileComponent
      },
      {
        path        : 'create',
        children    : [
          {
            path : '',
            component   : CreateComponent
          },
          {
            path : 'photo',
            component : PhotoComponent
          },
          {
            path : 'user',
            component : UserComponent
          },
          {
            path : 'about',
            component : AboutComponent
          }
          
        ]
      },
    ]
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
