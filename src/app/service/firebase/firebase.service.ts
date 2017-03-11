import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { FIREBASE_CONFIG } from '../../app.constants';


@Injectable()
export class FirebaseService {
  public user : BehaviorSubject<any> = new BehaviorSubject(null);
  private app;
  private storage;
  private storageRef;
  private profileRef;
  
  constructor (public http : Http) {
    //setup firebase
    this.app = firebase.initializeApp(FIREBASE_CONFIG)
    firebase.auth().onAuthStateChanged((user) => this.user.next(user));
    
    this.storage = firebase.storage();
    this.storageRef = this.storage.ref();
    
    
  }
  
  get auth (){
    return this.app.auth()
  }
  
  get db (){
    return this.app.database()
  }
  
  get token(){
    return this.auth.currentUser.getToken(true)
        .then((idToken) => idToken)
        .catch((error) => Promise.reject(error));
  }
  
  upload(file, uid){
    //TODO ADD CROPPING VIA CROPPER.JS
    this.profileRef = this.storageRef.child(`users/${uid}/${file.name}`);
    this.profileRef.put(file).then((snapshot)=> console.log(snapshot))
    
  }
}
