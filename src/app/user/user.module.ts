import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { userRoutes } from './user.routes';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(userRoutes)
  ]
})
export class UserModule { }
