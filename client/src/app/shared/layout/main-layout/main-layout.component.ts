import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../service/sidebar.service';



@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor(public sidebarservice: SidebarService) {}
  public ngOnInit(): void {
    //  this.toggleBackgroundImage();
    //  this.hideSidebar();
  }
  public toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
  public toggleBackgroundImage() {
    this.sidebarservice.hasBackgroundImage =
      !this.sidebarservice.hasBackgroundImage;
  }
  public getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  public hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
