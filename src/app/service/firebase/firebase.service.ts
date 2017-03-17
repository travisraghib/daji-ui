import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app.constants';


@Injectable()
export class FirebaseService {
  public user : BehaviorSubject<any> = new BehaviorSubject(null);
  private app;
  private storage;
  
  constructor () {
    //setup firebase
    this.app = firebase.initializeApp(FIREBASE_CONFIG)
    firebase.auth().onAuthStateChanged((user) => this.user.next(user));
    
    this.storage = firebase.storage();
  }
  
  get auth (){
    return this.app.auth()
  }
  
  get db (){
    return this.app.database()
  }
  
  get storageRef (){
    return this.storage.ref();
  }
  
  get token(){
    return this.auth.currentUser.getToken(true)
        .then((idToken) => idToken)
        .catch((error) => Promise.reject(error));
  }
}
