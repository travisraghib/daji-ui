import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SessionStorageService } from './session-storage.service';
import { AlertService } from '../alert/alert.service';
import { FirebaseService } from '../firebase/firebase.service';
import { LOADING_ALERT, AUTH_ERROR_ALERT, USER_API } from '../../app.constants';

@Injectable()
export class UserDataService {
  private authState : BehaviorSubject<boolean> = new BehaviorSubject(false);
  private auth;
  
  public user;
  public profile;
  public registered;
  public token;
  
  constructor (
    private http : Http,
    private firebaseService : FirebaseService,
    private sessionStorageService : SessionStorageService,
    private alertService : AlertService
  ) {
    this.firebaseService.user.subscribe((user) => this.user = user);
    this.auth = this.firebaseService.auth;
  
    // this.firebaseService.auth.currentUser.getToken(true)
    //     .then((idToken) => console.log(idToken))
    //     .catch((error) => console.log(error));
  }
  
  login (email : string, password : string) {
    this.alertService.alert.next(LOADING_ALERT)
    return this.auth
               .signInWithEmailAndPassword(email, password)
               .then(res => this.handleAuth(res))
               .catch(err => this.handleAuthError(err));
  }
  
  signUp (email : string, password : string) {
    // this.handleSignUp({email, password})
    return this.auth.createUserWithEmailAndPassword(email, password)
               .then(res => this.handleSignUp(res))
               .catch(err => this.handleAuthError(err));
  }
  
  handleSignUp (res) {
    this.http.post(USER_API, res)
        .toPromise()
        .then(res => console.log(res))
        .catch(err => console.log(err));
  }
  
  handleAuth (res) {
    this.alertService.dismiss.next({})
    this.user = res;
    return res;
  }
  
  handleAuthError (error) {
    this.alertService.dismiss.next({});
    this.alertService.alert.next(AUTH_ERROR_ALERT);
    return Promise.reject(error);
  }
  
}
