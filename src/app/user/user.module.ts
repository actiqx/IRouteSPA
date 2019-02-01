import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { userRoutes } from './user.routes';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SidenavComponent } from './sidenav/sidenav.component';
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
import { CardComponent } from './card/card.component';
import { DtilesComponent } from './dashboard/dtiles/dtiles.component';
import { SidenavService } from './_services/sidenav.service';

@NgModule({
  declarations: [
    UserComponent,
    NavComponent,
    SidenavComponent,
    DashboardComponent,
    ViewprofileComponent,
    AddbankdetailsComponent,
    ChangepasswordComponent,
    DirectteamComponent,
    DownlineteamComponent,
    ProvidehelpComponent,
    ProvidehelphistoryComponent,
    GethelpComponent,
    GethelphistoryComponent,
    WithdrawalComponent,
    WithdrawalhistoryComponent,
    GrowthincomeComponent,
    LevelincomeComponent,
    GenerateticketComponent,
    SendticketComponent,
    ReceiveticketComponent,
    CardComponent,
    DtilesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(userRoutes),
    MDBBootstrapModule.forRoot()
  ],
  providers: [SidenavService]
})
export class UserModule {}
