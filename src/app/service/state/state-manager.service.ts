import { Injectable } from '@angular/core';
import { Router, Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserDataService } from '../user/user-data.service';

@Injectable()
export class StateManagerService implements CanActivate {
  private user;
  constructor(
    private router : Router,
    private userDataService : UserDataService
  ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.user = this.userDataService.userResolve;
    const url: string = state.url;
    return this.handleRoutMap(url);
  }
  
  handleRoutMap(url) {
    if(!this.user) {
      this.router.navigate(['/login']);
      return false;
    }
    
    switch(url){
      case '/profile':
        return this.checkRegistration();
    }
    
    return true;
  }
  
  checkRegistration(){
    if(!this.user.registered){
      this.router.navigate(['/profile/create']);
      return false;
    }
  }

}
