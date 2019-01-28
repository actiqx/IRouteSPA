import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: []
    },
	 {
      title: 'Profile',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'View Profile'
        },
        {
          title: 'Add Bank Details'
        },
        {
          title: 'Change Password'
        }
      ]
    },
	{
      title: 'My Team',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Direct Team'
        },
        {
          title: 'Downline Team'
        }
      ]
    },
	{
      title: 'Provide Help',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Provide Help'
        },
        {
          title: 'Provide Help History'
        }
      ]
    },
	{
      title: 'Get Help',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Get Help'
        },
        {
          title: 'Get Help History'
        }
      ]
    },
	{
      title: 'Level Income',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Withdrawal'
        },
        {
          title: 'Withdrawal History'
        }
      ]
    },
	{
      title: 'Income Report',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Growth Income'
        },
        {
          title: 'Level Income'
        }
      ]
    },
	{
      title: 'Support',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Generate Ticket'
        },
        {
          title: 'Send Ticket'
        },
        {
          title: 'Receive Ticket'
        }
      ]
    },
	{
      title: 'Logout',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      submenus: []
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
