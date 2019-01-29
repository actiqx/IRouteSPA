import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { AddbankdetailsComponent } from './profile/addbankdetails/addbankdetails.component';
import { ChangepasswordComponent } from './profile/changepassword/changepassword.component';
import { DirectteamComponent } from './myteam/directteam/directteam.component';
import { DownlineteamComponent } from './myteam/downlineteam/downlineteam.component';
import { ProvidehelpComponent } from './providehelp/providehelp/providehelp.component';
import { ProvidehelphistoryComponent } from './providehelp/providehelphistory/providehelphistory.component';
import { GethelpComponent } from './gethelp/gethelp/gethelp.component';
import { GethelphistoryComponent } from './gethelp/gethelphistory/gethelphistory.component';
import { WithdrawalComponent } from './levelincome/withdrawal/withdrawal.component';
import { WithdrawalhistoryComponent } from './levelincome/withdrawalhistory/withdrawalhistory.component';
import { GrowthincomeComponent } from './incomereport/growthincome/growthincome.component';
import { LevelincomeComponent } from './incomereport/levelincome/levelincome.component';
import { GenerateticketComponent } from './support/generateticket/generateticket.component';
import { SendticketComponent } from './support/sendticket/sendticket.component';
import { ReceiveticketComponent } from './support/receiveticket/receiveticket.component';


export const userRoutes: Routes = [
    {
        path: 'user',
        component: UserComponent, 
        children: [
          {
            path: '',
            component: DashboardComponent
          },
          {
            path: 'viewprofile',
            component: ViewprofileComponent
          },
          {
            path: 'addbankdetails',
            component: AddbankdetailsComponent
          },
          {
            path: 'changepassword',
            component: ChangepasswordComponent
          },
          {
            path: 'directteam',
            component: DirectteamComponent
          },
          {
            path: 'downlineteam',
            component: DownlineteamComponent
          },
          {
            path: 'providehelp',
            component: ProvidehelpComponent
          },
          {
            path: 'providehelphistory',
            component: ProvidehelphistoryComponent
          },
          {
            path: 'gethelp',
            component: GethelpComponent
          },
          {
            path: 'gethelphistory',
            component: GethelphistoryComponent
          },
          {
            path: 'withdrawal',
            component: WithdrawalComponent
          },
          {
            path: 'withdrawalhistory',
            component: WithdrawalhistoryComponent
          },
          {
            path: 'growthincome',
            component: GrowthincomeComponent
          },
          {
            path: 'levelincome',
            component: LevelincomeComponent
          },
          {
            path: 'generateticket',
            component: GenerateticketComponent
          },
          {
            path: 'sendticket',
            component: SendticketComponent
          },
          {
            path: 'receiveticket',
            component: ReceiveticketComponent
          }
        ]
    }

];