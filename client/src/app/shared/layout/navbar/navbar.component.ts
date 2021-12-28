import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../service/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private sidebarService: SidebarService) {
  }

  public ngOnInit(): void {
  }

  public toggleSideBar(): void {
    this.sidebarService.toggle();
  }
}
