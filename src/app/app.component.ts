import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private sideNavShowing : boolean = false;
  ngOnInit(){
  }

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
