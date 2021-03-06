import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { SiteComponent } from './site.component';
import { SigninComponent } from './signin/signin.component';

export const siteRoutes: Routes = [
  {
    path: 'site',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: 'signin',
        component: SigninComponent
      }
    ]
  }
];
