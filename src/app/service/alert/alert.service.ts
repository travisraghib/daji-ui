import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Alert, Dismiss } from '../../models/alert.interface';
import { ALERT_DEFAULT } from '../../app.constants';

@Injectable()
export class AlertService {
  public alert : BehaviorSubject<Alert> = new BehaviorSubject(ALERT_DEFAULT);
  public dismiss : BehaviorSubject<Dismiss> = new BehaviorSubject(ALERT_DEFAULT);
}
