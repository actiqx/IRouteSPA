import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site.component';
import { siteRoutes } from './site.routes';
import { RegistrationComponent } from './registration/registration.component';
import { UserModule } from '../user/user.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [
    HomeComponent,
    SiteComponent,
    RegistrationComponent,
    NavbarComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(siteRoutes),
    MDBBootstrapModule.forRoot(),
    UserModule,
    FormsModule,
    AdminModule
  ]
})
export class SiteModule {}
