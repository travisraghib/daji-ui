import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {
  public hiding : BehaviorSubject<boolean> = new BehaviorSubject(false);
}
