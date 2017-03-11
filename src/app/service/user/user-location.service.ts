import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { UserLocation } from '../../models/user-location.interface';
import { CLIENT_LOCATION_DEFAULT } from '../../app.constants';

@Injectable()
export class UserLocationService {
  public userLocation : BehaviorSubject<UserLocation> = new BehaviorSubject(CLIENT_LOCATION_DEFAULT);
  
}
