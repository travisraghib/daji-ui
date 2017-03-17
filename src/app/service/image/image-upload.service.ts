import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { UserDataService } from '../user/user-data.service';
import { FirebaseService } from '../firebase/firebase.service';

import { LOADING_ALERT, UPLOAD_ERROR_ALERT } from '../../app.constants';

@Injectable()
export class ImageUploadService {
  constructor (
    private userDataService : UserDataService,
    private firebaseService : FirebaseService,
    private alertService : AlertService
  ) { }
  
  upload (file) {
    this.alertService.alert.next(LOADING_ALERT);
    
    const { uid }  = this.userDataService.user;
    const fileName = new Date().getTime();
    const profileRef = this.firebaseService
                           .storageRef
                           .child(`users/${uid}/${fileName}`);
    return profileRef.put(file)
                     .then(image => this.userDataService.handleProfileUpload(image.downloadURL))
                     .then(res => {
                       this.alertService.dismiss.next({})
                       return res
                     })
                     .catch(err => {
                       this.alertService.alert.next(UPLOAD_ERROR_ALERT)
                       return err;
                     });
  }
}