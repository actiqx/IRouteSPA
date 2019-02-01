import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

import { Routes, RouterModule } from '@angular/router';
import { UsedpinlistComponent } from './pin/usedpinlist/usedpinlist.component';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './personal/editprofile/editprofile.component';
import { EditbankdetailsComponent } from './personal/editbankdetails/editbankdetails.component';
import { ChangeadminpasswordComponent } from './personal/changeadminpassword/changeadminpassword.component';
import { ChangememberpasswordComponent } from './personal/changememberpassword/changememberpassword.component';
import { TotalmemberlistComponent } from './personal/totalmemberlist/totalmemberlist.component';
import { DailyjoininglistComponent } from './personal/dailyjoininglist/dailyjoininglist.component';
import { DailyhelpgivenlistComponent } from './personal/dailyhelpgivenlist/dailyhelpgivenlist.component';
import { InboxComponent } from './personal/inbox/inbox.component';
import { OutboxComponent } from './personal/outbox/outbox.component';
import { SentmessageComponent } from './personal/sentmessage/sentmessage.component';
import { WebenquiryComponent } from './personal/webenquiry/webenquiry.component';
import { AllocatepinComponent } from './pin/allocatepin/allocatepin.component';
import { UnusedpinlistComponent } from './pin/unusedpinlist/unusedpinlist.component';
import { LinklistComponent } from './linkdetails/linklist/linklist.component';
import { PaidlinklistComponent } from './linkdetails/paidlinklist/paidlinklist.component';
import { PendinglinklistComponent } from './linkdetails/pendinglinklist/pendinglinklist.component';
import { NotlinkedmemberlistComponent } from './linkdetails/notlinkedmemberlist/notlinkedmemberlist.component';
import { RejectlinklistComponent } from './linkdetails/rejectlinklist/rejectlinklist.component';
import { RecommitmentlistComponent } from './linkdetails/recommitmentlist/recommitmentlist.component';
import { PendinglistComponent } from './linkdetails/pendinglist/pendinglist.component';
import { WithdrawallistComponent } from './linkdetails/withdrawallist/withdrawallist.component';
import { PaidwithdrawallistComponent } from './linkdetails/paidwithdrawallist/paidwithdrawallist.component';
import { EditnewsComponent } from './newsdetails/editnews/editnews.component';
import { DeletenewsComponent } from './newsdetails/deletenews/deletenews.component';
import { ViewnewsComponent } from './newsdetails/viewnews/viewnews.component';
import { adminRoutes } from './admin.route';

import { SidenavService } from './_services/sidenav.service';
import { AdminSidenavComponent } from './sidenav/sidenav.component';
import { AdminNavComponent } from './nav/nav.component';
@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(adminRoutes)
  ],
  declarations: [
    AdminComponent,
    UsedpinlistComponent,
    HomeComponent,
    EditprofileComponent,
    EditbankdetailsComponent,
    ChangeadminpasswordComponent,
    ChangememberpasswordComponent,
    TotalmemberlistComponent,
    DailyjoininglistComponent,
    DailyhelpgivenlistComponent,
    InboxComponent,
    OutboxComponent,
    SentmessageComponent,
    WebenquiryComponent,
    AllocatepinComponent,
    UnusedpinlistComponent,
    LinklistComponent,
    PaidlinklistComponent,
    PendinglinklistComponent,
    NotlinkedmemberlistComponent,
    RejectlinklistComponent,
    RecommitmentlistComponent,
    PendinglistComponent,
    WithdrawallistComponent,
    PaidwithdrawallistComponent,
    EditnewsComponent,
    DeletenewsComponent,
    ViewnewsComponent,
    AdminSidenavComponent,
    AdminNavComponent
  ],
  providers: [SidenavService]
})
export class AdminModule {}
