import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDataService } from '../../service/user/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private userDataService : UserDataService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params['id']){
        //get user details
        return;
      }
      //check if user has registerd
    });
  }

}
