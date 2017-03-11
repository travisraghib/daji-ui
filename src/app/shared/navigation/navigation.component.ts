import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  private isShowing: boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.setupScrollSpy();
  }
  
  handleDrawerToggle(){
    this.isShowing = !this.isShowing;
  }
  
  handleDrawerClose(){
    this.isShowing = false;
  }
  
  setupScrollSpy(){
    // window.addEventListener('scroll', (event)=>{
    //   console.log(event);
    // })
  }
  
  
}
 