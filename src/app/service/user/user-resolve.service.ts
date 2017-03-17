import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserDataService } from './user-data.service';

@Injectable()
export class UserResolveService implements Resolve<any> {
  private user;
  
  constructor(
    private router : Router,
    private userDataService : UserDataService
  ) { }
  
  resolve(route: ActivatedRouteSnapshot) {
    console.log(route)
    this.user = this.userDataService.userResolve;
    this.handleRouteGates(route.url);
    return this.userDataService.userResolve;
  }
  
  handleRouteGates(url){
    console.log(url)
    switch(url){
      case '/profile':
        if(!this.user){
          console.log('blocked');
        }
        
        break;
    }
   
    
    
  }
  
}
