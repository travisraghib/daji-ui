//ng
import { Component, OnInit, ChangeDetectorRef, trigger, transition, style, animate } from '@angular/core';
//service
import { AlertService } from '../../service/alert/alert.service';
//interface
import { Alert, Dismiss } from '../../models/alert.interface';
//helper
import { AnimationHelper } from '../../service/helpers/animation.helper';

@Component({
  selector    : 'app-alert',
  templateUrl : './alert.component.html',
  styleUrls   : [ './alert.component.scss' ],
  animations  : [ AnimationHelper.drop ]
})
export class AlertComponent implements OnInit {
  private cssClass            = [];
  private alertType : string  = 'alert-success';
  private isShowing : boolean = false;
  private alert : Alert;
  private timeout;
  
  constructor (
      private alertService : AlertService,
      private changeDetector : ChangeDetectorRef) {}
  
  ngOnInit () {
    this.alertService
        .alert
        .subscribe((alert : Alert) => this.handleAlert(alert));
    
    this.alertService
        .dismiss
        .subscribe((dismiss : Dismiss) => this.handleDismiss(dismiss));
  }
  
  handleAlert (alert : Alert) {
    if (alert.init) return;
    
    if (alert.durration) this.setupAlertTimer(alert.durration);
    
    this.alert     = alert;
    this.isShowing = true;
  }
  
  handleDismiss (dismiss : Dismiss) {
    if (dismiss.init) return;
    
    this.isShowing = false;
    this.changeDetector.detectChanges();
  }
  
  setupAlertTimer (durration : number) {
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(_ => this.isShowing = false, durration);
  }
}
