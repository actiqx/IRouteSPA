import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { SidenavService } from '../_services/sidenav.service';

@Component({
  selector: 'admin-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class AdminSidenavComponent implements OnInit {
  menus = [];
  constructor(public sidenavservice: SidenavService) {
    this.menus = sidenavservice.getMenuList();
  }

  ngOnInit() {}

  getSideBarState() {
    return this.sidenavservice.getSidebarState();
  }
  getRouteLink(menuData, isMenu) {
    if (isMenu) {
      if (menuData.submenus && menuData.submenus.length === 0) {
        return '/admin/' + menuData.value;
      }
    } else {
      return '/admin/' + menuData.value;
    }
  }
  toggle(currentMenu) {
    if (currentMenu.type === 'dropdown') {
      this.menus.forEach(element => {
        if (element === currentMenu) {
          currentMenu.active = !currentMenu.active;
        } else {
          element.active = false;
        }
      });
    }
  }

  getState(currentMenu) {
    if (currentMenu.active) {
      return 'down';
    } else {
      return 'up';
    }
  }

  hasBackgroundImage() {
    return this.sidenavservice.hasBackgroundImage;
  }
}
