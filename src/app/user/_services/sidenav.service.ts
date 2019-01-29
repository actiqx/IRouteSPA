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
      type: '',
      value:'',
      submenus: []
    },
	 {
      title: 'Profile',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      value:'profile',
      submenus: [
        {
          title: 'View Profile',
          value:'viewprofile'
        },
        {
          title: 'Add Bank Details',
          value:'addbankdetails'
        },
        {
          title: 'Change Password',
          value:'changepassword'
        }
      ]
    },
	{
      title: 'My Team',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      value:'myteam',
      submenus: [
        {
          title: 'Direct Team',
          value:'directteam'
        },
        {
          title: 'Downline Team',
          value:'downlineteam',
        }
      ]
    },
	{
      title: 'Provide Help',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      value:'providehelp',
      submenus: [
        {
          title: 'Provide Help',
          value:'providehelp'
        },
        {
          title: 'Provide Help History',
          value:'providehelphistory',
        }
      ]
    },
	{
      title: 'Get Help',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      value:'gethelp',
      submenus: [
        {
          title: 'Get Help',
          value:'gethelp'
        },
        {
          title: 'Get Help History',
          value:'gethelphistory'
        }
      ]
    },
	{
      title: 'Level Income',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      value:'levelincome',
      submenus: [
        {
          title: 'Withdrawal',
          value:'withdrawal'
        },
        {
          title: 'Withdrawal History',
          value:'withdrawalhistory'
        }
      ]
    },
	{
      title: 'Income Report',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      value:'incomereport',
      submenus: [
        {
          title: 'Growth Income',
          value:'growthincome'
        },
        {
          title: 'Level Income',
          value:'levelincome'
        }
      ]
    },
	{
      title: 'Support',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'dropdown',
      value:'support',
      submenus: [
        {
          title: 'Generate Ticket',
          value:'generateticket'
        },
        {
          title: 'Send Ticket',
          value:'sendticket'
        },
        {
          title: 'Receive Ticket',
          value:'receiveticket'
        }
      ]
    },
	{
      title: 'Logout',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: '',
      value:'logout',
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
