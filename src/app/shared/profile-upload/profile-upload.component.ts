import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { NavService } from '../../service/nav/nav.service';

export abstract class ProfileUploadComponent implements OnInit {
  
  constructor (
    public navService : NavService,
    public location : Location
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

}
