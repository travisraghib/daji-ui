import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, Inject } from '@angular/core';
import { UserLocation } from '../../models/user-location.interface';
import { LoaderService } from '../loader/loader.service';
import { UserLocationService } from '../user/user-location.service';
import { AlertService } from '../alert/alert.service';

import { GEOLOCATION_MSGS, CLIENT_LOCATION_DEFAULT, GEOLOCATION_LOADING_ALERT } from '../../app.constants';

declare var google : any;

@Injectable()
export class GeolocationService {
  private userLocation : BehaviorSubject<UserLocation>;
  private googleMapsReady : boolean;
  
  constructor (
      private loaderService : LoaderService,
      private userLocationService : UserLocationService,
      private alertService : AlertService){
      this.userLocation = this.userLocationService.userLocation;
    
    loaderService
      .behaviorSubjectList
      .googleMaps
      .subscribe(ready => { if (ready) this.googleMapsReady = ready});
  }
  
  handleGeolocationError (error) {
    console.log(error)
  }
  
  getClientLocation () {
    if (this.googleMapsReady) {
      if (window.navigator && window.navigator.geolocation) {
        this.alertService.alert.next(GEOLOCATION_LOADING_ALERT);
        return window
                   .navigator
                   .geolocation
                   .getCurrentPosition(
                     data => this.handleGeocodeCoordRequest(data),
                     error => this.handleGeolocationError(error)
                   );
      }
      return this.handleGeolocationError('browser not supported');
    }
    this.handleGeolocationError('google maps not ready');
  }
  
  handleGeocodeCoordRequest (data) {
    this.geocode({ location : new google.maps.LatLng(data.coords.latitude, data.coords.longitude) });
  }
  
  handleGeocodeStringRequest (searchString : string) {
    
  }
  
  geocode (where) {
    const { location }         = where;
    const coordinate           = { lat : location.lat(), lng : location.lng() };
    const geocoder             = new google.maps.Geocoder();
    let state : string;
    let city : string;
    
    geocoder.geocode(where, (results, status) => {
      if (status !== google.maps.GeocoderStatus.OK) return this.handleGeolocationError('Something went wrong: we cannot find you!');
      
      const addressComponentList = results[ 0 ].address_components;
      
      addressComponentList.some(component => {
        return component.types.some(type => {
          if (city && state) {
            this.alertService.dismiss.next({ dissmiss : true });
            return this.userLocation.next({ city, state, coordinate });
          }
          if (type === 'locality') city = component.long_name;
          
          if (type === 'administrative_area_level_1') state = component.long_name;
        });
      });
    });
  }
}
