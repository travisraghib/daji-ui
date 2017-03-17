import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

//modules
import { SharedModule } from './shared/shared.module'
//components
import { AppComponent } from './app.component';
//pages
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
//service
import { StateManagerService } from './service/state/state-manager.service';
import { AlertService } from './service/alert/alert.service';
import { NavService } from './service/nav/nav.service';
import { UserDataService } from './service/user/user-data.service';
import { UserResolveService } from './service/user/user-resolve.service';
import { UserLocationService } from './service/user/user-location.service';
import { LocalStorageService } from './service/user/local-storage.service';
import { SessionStorageService } from './service/user/session-storage.service';
import { GeolocationService } from './service/geolocation/geolocation.service';
import { LoaderService } from './service/loader/loader.service';
import { FirebaseService } from './service/firebase/firebase.service';
import { ImageUploadService } from './service/image/image-upload.service';
//routes
import { appRoutes } from './app.routing';
import { LandingComponent } from './pages/landing/landing.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/profile/create/create.component';

import 'hammerjs';
import { PhotoComponent } from './pages/profile/create/photo/photo.component';
import { UserComponent } from './pages/profile/create/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    LandingComponent,
    SignupComponent,
    ProfileComponent,
    CreateComponent,
    PhotoComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    MaterialModule,
  ],
  providers: [
    StateManagerService,
    AlertService,
    NavService,
    UserDataService,
    UserResolveService,
    UserLocationService,
    LocalStorageService,
    SessionStorageService,
    GeolocationService,
    LoaderService,
    FirebaseService,
    ImageUploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
