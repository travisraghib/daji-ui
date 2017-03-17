import { Component, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

import { NavService } from '../../service/nav/nav.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
  
})
export class NavigationComponent implements OnInit {
  @Output() toggle : EventEmitter<null> = new EventEmitter<null>();
  private hide = false;
  
  constructor(
    private navService : NavService
  ) {
    this.navService.hiding.subscribe(isHiding => this.hide = isHiding);
  }

  ngOnInit() {
    this.setupScrollSpy();
  }
  handleToggle(){
    this.toggle.emit();
  }
  
  
  setupScrollSpy(){
    // window.addEventListener('scroll', (event)=>{
    //   console.log(event);
    // })
  }
  
  
}
 