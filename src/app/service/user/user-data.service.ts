import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SessionStorageService } from './session-storage.service';
import { AlertService } from '../alert/alert.service';
import { FirebaseService } from '../firebase/firebase.service';
import { LOADING_ALERT, AUTH_ERROR_ALERT, USER_API } from '../../app.constants';

@Injectable()
export class UserDataService {
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
    this.auth = this.firebaseService.auth;
    this.firebaseService.user.subscribe(user => {
      this.user = user
      if (!user) this.sessionStorageService.set('user', user);
    });
  }
  
  get userResolve () {
    return this.sessionStorageService.get('user');
  }
  
  login (email : string, password : string) {
    this.alertService.alert.next(LOADING_ALERT)
    return this.auth
               .signInWithEmailAndPassword(email, password)
               .then(res => this.handleLogin(res))
               .then(res => this.sessionStorageService.set('user', res.json()))
               .catch(err => this.handleAuthError(err));
  }
  
  signUp (email : string, password : string) {
    this.alertService.alert.next(LOADING_ALERT)
    return this.auth.createUserWithEmailAndPassword(email, password)
               .then(this.handleSignUp.call(this, password))
               .catch(this.handleAuthError.bind(this));
  }
  
  handleSignUp (password) {
    return (res) => {
      this.alertService.dismiss.next({})
      return this.firebaseService.token
                 .then(idToken => this.http.post(USER_API, { password, idToken }).toPromise())
                 .then(res => this.sessionStorageService.set('user', res.json()))
                 .catch(this.handleAuthError.bind(this));
    }
  }
  
  handleLogin (res) {
    this.alertService.dismiss.next({})
    return this.firebaseService.token
               .then(idToken => this.http.post(`${USER_API}/auth`, { idToken }).toPromise());
  }
  
  handleAuthError (error) {
    this.alertService.dismiss.next({});
    this.alertService.alert.next(AUTH_ERROR_ALERT);
    return Promise.reject(error);
  }
  
  generateRequest (cb){
    return this.firebaseService.token.then(idToken => cb(idToken));
  }
  
  handleProfileUpload (url) {
    return this.generateRequest((idToken) => this.http.post(`${USER_API}/profile/image`, { idToken, url }).toPromise());
  }
  
  handleUpdateProfile (data) {
    return this.generateRequest((idToken) => this.http.patch(`${USER_API}/profile`, { idToken, data}).toPromise())
  }
  
  
}
