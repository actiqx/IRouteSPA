import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { userRoutes } from './user.routes';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    NavComponent,
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(userRoutes),
    MDBBootstrapModule.forRoot(),
  ]
})
export class UserModule { }
