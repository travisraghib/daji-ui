import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Inject, Injectable } from '@angular/core';
import { EXTERNAL_LIBRARY_LIST } from '../../app.constants';

@Injectable()
export class LoaderService {
  public behaviorSubjectList;
  
  constructor (
  ) {
    
    EXTERNAL_LIBRARY_LIST.forEach((item) => {
      
      const { name, url }              = item;
      if(!this.behaviorSubjectList) this.behaviorSubjectList = {};
      this.behaviorSubjectList[ name ] = new BehaviorSubject(false);
      this.load(url, name);
    });
  }
  
  load (url : string, name : string) {
    const script  = document.createElement('script');
    script.type   = 'text/javascript';
    script.async  = true;
    script.defer  = true;
    script.onload = this.onScriptLoad(name);
    script.src    = url;
    
    document.body.appendChild(script);
  }
  
  onScriptLoad (name : string) {
    return (event) => {
      this.behaviorSubjectList[ name ].next(true);
    }
  }
}