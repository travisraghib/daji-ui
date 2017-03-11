import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { DrawerComponent } from './navigation/drawer/drawer.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavigationComponent,
    DrawerComponent,
    AlertComponent
  ],
  exports: [
    NavigationComponent,
    DrawerComponent,
    AlertComponent
  ]
})
export class SharedModule { }
