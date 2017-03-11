//ng
import { Component, ViewEncapsulation, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
//services
import { UserDataService } from '../../../service/user/user-data.service';
import { UserLocationService } from '../../../service/user/user-location.service';
//models
import { UserLocation } from '../../../models/user-location.interface';
//helpers
import { AnimationHelper } from '../../../service/helpers/animation.helper';

@Component({
  selector    : 'app-drawer',
  templateUrl : './drawer.component.html',
  styleUrls   : [ './drawer.component.scss' ],
  animations  : [ AnimationHelper.slideToRight, AnimationHelper.halfFade ],
  encapsulation: ViewEncapsulation.None
})
export class DrawerComponent implements OnInit {
  @Input()
  isShowing : boolean;
  
  @Output()
  close : EventEmitter<string> = new EventEmitter<string>();
  
  private location : UserLocation;
  
  constructor (
      private userDataService : UserDataService,
      private userLocationService : UserLocationService,
      private changeDetector : ChangeDetectorRef
  ) { }
  
  ngOnInit () {
    this.userLocationService
        .userLocation
        .subscribe((data : UserLocation) => {
          this.location = data;
          this.changeDetector.detectChanges();
        });
  }
  
  onUpdateSearch (event) {
    console.log(event);
  }
  
  handleClose(){
    this.close.emit();
  }
}

