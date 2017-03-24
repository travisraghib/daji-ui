import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { NavService } from '../../service/nav/nav.service';

@Component({
  selector: 'app-profile-user-upload',
  templateUrl: './profile-user-upload.component.html',
  styleUrls: ['./profile-user-upload.component.scss']
})
export class ProfileUserUploadComponent implements OnInit {
  private accountTypes : string[]   = [ 'Be taken care of', 'Take care of someone' ];
  private seekingGenders : string[] = [ 'Men', 'Women', 'Transgenders' ];
  private genders : string[]        = [ 'Man', 'Woman', 'Transgender' ];
  
  private selectedGenders = { MEN : false, WOMEN : false, TRANSGENDERS : false };
  
  constructor(
    private navService : NavService,
    private location : Location,
  ) { }

  ngOnInit() {
    this.navService.hiding.next(true);
  }
  
  ngOnDestroy(){
    this.navService.hiding.next(false);
  }
  
  back(){
    this.location.back();
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
  
}
