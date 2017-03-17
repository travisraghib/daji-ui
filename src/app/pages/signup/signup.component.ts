import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../service/user/user-data.service';

@Component({
  selector    : 'app-signup',
  templateUrl : './signup.component.html',
  styleUrls   : [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
  
  constructor (
    private userDataService : UserDataService,
    private router: Router,
  ) { }
  
  ngOnInit () {}
  
  handleSignUp (email : string, password : string) {
    this.userDataService.signUp(email, password)
        .then( _ => this.router.navigate([ '/profile' ]))
  }
  
}
