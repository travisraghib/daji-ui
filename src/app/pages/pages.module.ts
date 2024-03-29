import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { SharedModule } from '../shared/shared.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './profile/create/create.component';
import { PhotoComponent } from './profile/create/photo/photo.component';
import { AboutComponent } from './profile/create/about/about.component';
import { BasicInfoComponent } from './profile/create/basic-info/basic-info.component';
import { UserComponent } from './profile/create/user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    TranslateModule
  ],
  declarations: [
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    CreateComponent,
    PhotoComponent,
    AboutComponent,
    BasicInfoComponent,
    UserComponent
  ],
  exports : [
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    CreateComponent,
    PhotoComponent,
    AboutComponent,
    BasicInfoComponent
  ]
})
export class PagesModule { }
