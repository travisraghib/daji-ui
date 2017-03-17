import { Component, OnInit } from '@angular/core';

import { NavService } from '../../service/nav/nav.service';

@Component({
  selector: 'app-profile-user-upload',
  templateUrl: './profile-user-upload.component.html',
  styleUrls: ['./profile-user-upload.component.scss']
})
export class ProfileUserUploadComponent implements OnInit {
  private accountTypes : string[]   = [ 'DADDY', 'BABY' ];
  private seekingGenders : string[] = [ 'MEN', 'WOMEN', 'TRANSGENDERS' ];
  private genders : string[]        = [ 'MAN', 'WOMAN', 'TRANSGENDER' ];
  
  private selectedGenders = { MEN : false, WOMEN : false, TRANSGENDERS : false };
  
  constructor(
    private navService : NavService
  ) { }

  ngOnInit() {
    this.navService.hiding.next(true);
  }
  
  ngOnDestroy(){
    this.navService.hiding.next(false);
  }
}
