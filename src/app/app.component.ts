import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private sideNavShowing : boolean = false;
  ngOnInit(){
  }
  
  toggleSideNav(){
    console.log(14)
    this.sideNavShowing = !this.sideNavShowing;
  }
}
