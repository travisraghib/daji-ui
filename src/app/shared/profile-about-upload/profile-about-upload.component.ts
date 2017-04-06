import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavService } from '../../service/nav/nav.service';
import { UserDataService } from '../../service/user/user-data.service';
import { ProfileUploadComponent } from '../profile-upload/profile-upload.component';
 
@Component({
  selector    : 'app-profile-about-upload',
  templateUrl : './profile-about-upload.component.html',
  styleUrls   : [ './profile-about-upload.component.scss' ]
})
export class ProfileAboutUploadComponent extends ProfileUploadComponent {
  private ethnicities : { label : string, value : string }[] = [
    { label : 'USER_ASIAN_OPTION', value : 'asian' },
    { label : 'USER_BLACK_AFRICAN_DESCENT_OPTION', value : 'black' },
    { label : 'USER_LATIN_OPTION', value : 'latin' },
    { label : 'USER_EAST_INDIAN_OPTION', value : 'indian' },
    { label : 'USER_MIDDLE_EASTERN_OPTION', value : 'middle-eastern' },
    { label : 'USER_MIXED_OPTION', value : 'mixed' },
    { label : 'USER_WHITE_CAUCASIAN_OPTION', value : 'white' }
  ];
  private bodyTypes : { label : string, value : string }[]   = [
    { label : 'USER_SLIM_OPTION', value : 'slim' },
    { label : 'USER_ATHLETIC_OPTION', value : 'athletic' },
    { label : 'USER_AVERAGE_OPTION', value : 'average' },
    { label : 'USER_CURVY_OPTION', value : 'curvy' },
    { label : 'USER_FEW_EXTRA_POUND_OPTION', value : 'few extra' },
    { label : 'USER_OVER_WEIGHT_OPTION', value : 'over weight' }
  ];
  private hariColors : { label : string, value : string }[]  = [
    { label : 'USER_AURURN_OPTION', value : 'auburn' },
    { label : 'USER_BLACK_OPTION', value : 'black' },
    { label : 'USER_BLONDE_OPTION', value : 'blonde' },
    { label : 'USER_LIGHT_BROWN_OPTION', value : 'light brown' },
    { label : 'USER_DARK_BROWN_OPTION', value : 'dark brown' },
    { label : 'USER_GREY_OPTION', value : 'grey' },
    { label : 'USER_RED_OPTION', value : 'red' },
    { label : 'USER_WHITE_OPTION', value : 'white' },
    { label : 'USER_OTHER_OPTION', value : 'other' }
  ];
  
  constructor (
    location : Location,
    navService : NavService,
    private router : Router,
    private userDataService : UserDataService
  ) {
    super(navService, location);
  }
  
  handleUserInput (type, value) {
    console.log(type)
    console.log(value)
    const data = {};
    data[type] = value;
    this.userDataService.handleUpdateProfile( data );
  }
  
  handleNext () {
    this.router.navigate([ '/profile/create/about' ]);
  }
  
}
