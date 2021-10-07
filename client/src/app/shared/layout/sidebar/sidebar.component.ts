import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { SidebarService } from './sidebar.service';
import { AccountService } from 'src/app/module/account/service/account.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200)),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  public menus = [];
  public user: any;

  constructor(public sidebarservice: SidebarService) {
    this.menus = sidebarservice.getMenuList();
  }

  public ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  public getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  public toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach((element) => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  public getState(currentMenu) {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  public hasBackgroundImage() {
    return this.sidebarservice.hasBackgroundImage;
  }

  public closeSidebar(): void{
    this.sidebarservice.setSidebarState(true);
  }
}
