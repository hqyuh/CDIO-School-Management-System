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
import { Observable } from 'rxjs';
import User from 'src/app/module/account/models/account.model';


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

  constructor(public sidebarservice: SidebarService, private accountService: AccountService) {
    this.menus = sidebarservice.getMenuList();
  }

  public ngOnInit() {}

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

  public get CurrentUser(): Observable<User>{
    return this.accountService.currentUser();
  }
}
