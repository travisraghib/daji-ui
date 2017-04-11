import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileUploadComponent } from '../profile-upload/profile-upload.component';
import { NavService } from '../../service/nav/nav.service';
import { UserDataService } from '../../service/user/user-data.service';

@Component({
  selector    : 'app-profile-basic-upload',
  templateUrl : 'profile-basic-upload.component.html',
  styleUrls   : [ 'profile-basic-upload.component.scss' ]
})
export class ProfileBasicUploadComponent extends ProfileUploadComponent {
  private accountTypes = [
    {
      label : 'BABY',
      value : 'baby'
    },
    {
      label : 'DADDY',
      value : 'daddy'
    }
  ];
  private seekingGenders : string[] = [ 'Men', 'Women', 'Transgenders' ];
  private genders : string[]        = [ 'Man', 'Woman', 'Transgender' ];
  private selectedGenders = { Men : false, Women : false, Transgenders: false };
  
  constructor (
    location : Location,
    navService : NavService,
    private router : Router,
    private userDataService : UserDataService
  ) {
    super(navService, location);
    
  }
  
  handleUserGenderSelect (event) {
    const gender = event.value
    this.userDataService.handleUpdateProfile({ gender });
  }
  
  handleSeekingGenderSelect (gender, event) {
    console.log(gender)
    console.log(event.checked)
    this.selectedGenders[gender] = event.checked;
    this.userDataService.handleUpdateProfile({ seeking : this.selectedGenders});
  }
  
  handleProfileTypeSelect (event) {
    const type = event.value
    this.userDataService.handleUpdateProfile({ type });
  }
  
  handleNext () {
    this.router.navigate([ '/profile/create/about' ]);
  }
}
