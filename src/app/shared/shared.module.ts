import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { NavigationComponent } from './navigation/navigation.component';
import { DrawerComponent } from './navigation/drawer/drawer.component';
import { AlertComponent } from './alert/alert.component';
import { ProfilePhotoUploadComponent } from './profile-photo-upload/profile-photo-upload.component';
import { ProfileBasicUploadComponent } from './profile-basic-upload/profile-basic-upload.component';
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
    ProfileBasicUploadComponent,
    ProfileAboutUploadComponent,
  ],
  exports: [
    NavigationComponent,
    DrawerComponent,
    AlertComponent,
    ProfilePhotoUploadComponent,
    ProfileBasicUploadComponent,
    ProfileAboutUploadComponent
  ]
})
export class SharedModule { }
