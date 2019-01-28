import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const userRoutes: Routes = [
    {
        path: 'user',
        component: UserComponent, 
        children: [
          {
            path: '**',
            component: HomeComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
            outlet: 'content'
          }
          
        ]
    }

];