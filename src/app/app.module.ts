import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

//modules
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';

//components
import { AppComponent } from './app.component';
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

import 'hammerjs';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    SharedModule,
    PagesModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
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
