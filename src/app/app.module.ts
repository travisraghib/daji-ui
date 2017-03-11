import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//modules
import { FileUploadModule } from 'ng2-file-upload';
import { SharedModule } from './shared/shared.module'
//components
import { AppComponent } from './app.component';
//pages
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
//service
import { StateManagerService } from './service/state/state-manager.service';
import { AlertService } from './service/alert/alert.service';
import { UserDataService } from './service/user/user-data.service';
import { UserLocationService } from './service/user/user-location.service';
import { LocalStorageService } from './service/user/local-storage.service';
import { SessionStorageService } from './service/user/session-storage.service';
import { GeolocationService } from './service/geolocation/geolocation.service';
import { LoaderService } from './service/loader/loader.service';
import { FirebaseService } from './service/firebase/firebase.service';
//routes
import { appRoutes } from './app.routing';
import { LandingComponent } from './pages/landing/landing.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateComponent } from './pages/profile/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    LandingComponent,
    SignupComponent,
    ProfileComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    FileUploadModule
  ],
  providers: [
    StateManagerService,
    AlertService,
    UserDataService,
    UserLocationService,
    LocalStorageService,
    SessionStorageService,
    GeolocationService,
    LoaderService,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
