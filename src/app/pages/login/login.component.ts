import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../service/user/user-data.service'

@Component({
  selector: 'app-authentication',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private userDataService : UserDataService,
    private router: Router,
  ) { }

  ngOnInit() {}
  
  handleSignIn(email : string, password: string){
    this.userDataService.login(email, password)
      .then(user => this.router.navigate(['/profile']))
      .catch(err => console.log(err))
    
  }
}
