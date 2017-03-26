import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { NavigationComponent } from './navigation/navigation.component';
import { DrawerComponent } from './navigation/drawer/drawer.component';
import { AlertComponent } from './alert/alert.component';
import { ProfilePhotoUploadComponent } from './profile-photo-upload/profile-photo-upload.component';
import { ProfileUserUploadComponent } from './profile-user-upload/profile-user-upload.component';
import { ProfileAboutUploadComponent } from './profile-about-upload/profile-about-upload.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule
  ],
  declarations: [
    NavigationComponent,
    DrawerComponent,
    AlertComponent,
    ProfilePhotoUploadComponent,
    ProfileUserUploadComponent,
    ProfileAboutUploadComponent,
  ],
  exports: [
    NavigationComponent,
    DrawerComponent,
    AlertComponent,
    ProfilePhotoUploadComponent,
    ProfileUserUploadComponent,
    ProfileAboutUploadComponent
  ]
})
export class SharedModule { }
