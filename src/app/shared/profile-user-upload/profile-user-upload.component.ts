import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { NavService } from '../../service/nav/nav.service';

import { ProfileUploadComponent } from '../profile-upload/profile-upload.component'

@Component({
  selector: 'app-profile-user-upload',
  templateUrl: './profile-user-upload.component.html',
  styleUrls: ['./profile-user-upload.component.scss']
})
export class ProfileUserUploadComponent extends ProfileUploadComponent {
  private accountTypes : string[]   = [ 'Be taken care of', 'Take care of someone' ];
  private seekingGenders : string[] = [ 'Men', 'Women', 'Transgenders' ];
  private genders : string[]        = [ 'Man', 'Woman', 'Transgender' ];
  
  private selectedGenders = { MEN : false, WOMEN : false, TRANSGENDERS : false };
  
  constructor(
    location : Location,
    navService : NavService,
    private router: Router
  ) {
    super(navService, location);
  
  }

  handleUserGenderSelect(event){
    console.log(event);
  }
  
  handleSeekingGenderSelect(gender, event){
    console.log(gender);
    console.log(event);
  }
  
  handleProfileTypeSelect(event){
    console.log(event);
  }
  
  handleNext(){
    this.router.navigate(['/profile/create/about']);
  }
}
