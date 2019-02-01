import { UsedpinlistComponent } from './pin/usedpinlist/usedpinlist.component';
import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
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

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'editprofile',
        component: EditprofileComponent
      },
      {
        path: 'editbankdetails',
        component: EditbankdetailsComponent
      },
      {
        path: 'changeadminpassword',
        component: ChangeadminpasswordComponent
      },
      {
        path: 'changememberpassword',
        component: ChangememberpasswordComponent
      },
      {
        path: 'totalmemberlist',
        component: TotalmemberlistComponent
      },
      {
        path: 'dailyjoininglist',
        component: DailyjoininglistComponent
      },
      {
        path: 'dailyhelpgivenlist',
        component: DailyhelpgivenlistComponent
      },
      {
        path: 'inbox',
        component: InboxComponent
      },
      {
        path: 'outbox',
        component: OutboxComponent
      },
      {
        path: 'sentmessage',
        component: SentmessageComponent
      },
      {
        path: 'webenquiry',
        component: WebenquiryComponent
      },
      {
        path: 'allocatepin',
        component: AllocatepinComponent
      },
      {
        path: 'usedpinlist',
        component: UsedpinlistComponent
      },
      {
        path: 'unusedpinList',
        component: UnusedpinlistComponent
      },
      {
        path: 'linklist',
        component: LinklistComponent
      },
      {
        path: 'paidlinklist',
        component: PaidlinklistComponent
      },
      {
        path: 'paidlinklist',
        component: PaidlinklistComponent
      },
      {
        path: 'pendinglinklist',
        component: PendinglinklistComponent
      },
      {
        path: 'notlinkedmemberlist',
        component: NotlinkedmemberlistComponent
      },
      {
        path: 'rejectlinklist',
        component: RejectlinklistComponent
      },
      {
        path: 'recommitmentlist',
        component: RecommitmentlistComponent
      },
      {
        path: 'pendinglist',
        component: PendinglistComponent
      },
      {
        path: 'withdrawallist',
        component: WithdrawallistComponent
      },
      {
        path: 'paidwithdrawallist',
        component: PaidwithdrawallistComponent
      },
      {
        path: 'addnews',
        component: PaidlinklistComponent
      },
      {
        path: 'editnews',
        component: EditnewsComponent
      },
      {
        path: 'deletenews',
        component: DeletenewsComponent
      },
      {
        path: 'viewnews',
        component: ViewnewsComponent
      }
    ]
  }
];
