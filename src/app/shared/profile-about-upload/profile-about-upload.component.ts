import { Component, OnInit } from '@angular/core';

@Component({
  selector    : 'app-profile-about-upload',
  templateUrl : './profile-about-upload.component.html',
  styleUrls   : [ './profile-about-upload.component.scss' ]
})
export class ProfileAboutUploadComponent implements OnInit {
  private ethnicities : string[] = [
    'USER_ASIAN_OPTION',
    'USER_BLACK_AFRICAN_DESCENT_OPTION',
    'USER_LATIN_OPTION',
    'USER_EAST_INDIAN_OPTION',
    'USER_MIDDLE_EASTERN_OPTION',
    'USER_MIXED_OPTION',
    'USER_NATIVE_AMERICAN_OPTION',
    'USER_WHITE_CAUCASIAN_OPTION'
  ];
  private bodyTypes : string[]   = [
    'USER_SLIM_OPTION',
    'USER_ATHLETIC_OPTION',
    'USER_AVERAGE_OPTION',
    'USER_CURVY_OPTION',
    'USER_FEW_EXTRA_POUND_OPTION',
    'USER_OVER_WEIGHT_OPTION'
  ];
  private hariColors : string[]  = [
    'USER_AURURN_OPTION',
    'USER_BLACK_OPTION',
    'USER_BLONDE_OPTION',
    'USER_LIGHT_BROWN_OPTION',
    'USER_DARK_BROWN_OPTION',
    'USER_GREY_OPTION',
    'USER_RED_OPTION',
    'USER_WHITE_OPTION',
    'USER_OTHER_OPTION'
  ];
  
  constructor () { }
  
  ngOnInit () {
  }
  
}
