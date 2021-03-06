import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public toggled = false;
  public _hasBackgroundImage = true;
  public menus = [
    {
      title: 'general',
      type: 'header'
    },
    {
      title: 'Môn học',
      icon: 'fas fa-book-open',
      active: true,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Quản lý môn học',
          badge: {
            text: 'Pro ',
            class: 'badge badge-success'
          },
          href: '/home/subject'
        },
              {
          title: 'Bài thi',
          href: '/home/quizz'
        },
      ]
    },
    {
      title: 'Học tập',
      icon: 'fas fa-thumbtack',
      active: false,
      type: 'dropdown',
      badge: {
        text: '2',
        class: 'badge-danger'
      },
      submenus: [
        {
          title: 'Bảng điểm',
          href: 'student-mark'
        },
        {
          title: 'Làm bài thi',
          href: '/home/exam-code'
        }
      ]
    },
    {
      title: 'Quản lý tài khoản',
      icon: 'fas fa-users',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Danh sách tài khoản',
          href: '/user-management'
        },
      ]
    },
    {
      title: 'Quản lý cá nhân',
      icon: 'fas fa-user',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Thông tin cá nhân',
          href: '/home/user/me'
        },
      ]
    },
    {
      title: 'Báo lỗi',
      icon: 'fas fa-bug',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Báo lỗi - Góp ý',
          href: '/home/report/bug'
        },
      ]
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Tài liệu',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
    },
    {
      title: 'Calendar',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    },
  ];
  constructor() { }

  public toggle() {
    this.toggled = ! this.toggled;
  }

  public getSidebarState() {
    return this.toggled;
  }

  public setSidebarState(state: boolean) {
    this.toggled = state;
  }

  public getMenuList() {
    return this.menus;
  }

  public get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  public set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }



}
