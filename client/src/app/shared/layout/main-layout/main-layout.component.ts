import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  constructor(public sidebarservice: SidebarService) {
  }
  ngOnInit(): void{
   //  this.toggleBackgroundImage();
  //  this.hideSidebar();
  }
 toggleSidebar() {
   this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
 }
 toggleBackgroundImage() {
   this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
 }
 getSideBarState() {
   return this.sidebarservice.getSidebarState();
 }

 hideSidebar() {
   this.sidebarservice.setSidebarState(true);
 }
}
