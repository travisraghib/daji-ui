import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../../service/user/user-data.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private userDataService : UserDataService
  ) { }

  ngOnInit() {}
  
  handleSignUp(email : string, password: string){
    console.log(email)
    console.log(password)
    this.userDataService.signUp(email, password);
  }

}
