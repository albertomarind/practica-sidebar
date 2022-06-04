import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { IconModule } from '../icon/icon.module';


@NgModule({
  declarations: [
    NavSidebarComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports:[
    NavSidebarComponent
  ]
})
export class SharedModule { }
