import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site.component';
import { siteRoutes } from './site.routes';
import { RegistrationComponent } from './registration/registration.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [HomeComponent, SiteComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(siteRoutes),
    UserModule
  ]
})
export class SiteModule { }
