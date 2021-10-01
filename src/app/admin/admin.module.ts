import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardMemberRequestsComponent } from './pages/admin-dashboard-member-requests/admin-dashboard-member-requests.component';
import { AdminDashboardHomeComponent } from './pages/admin-dashboard-home/admin-dashboard-home.component';
import { AdminDashboardInboxComponent } from './pages/admin-dashboard-inbox/admin-dashboard-inbox.component';
import { AdminDashboardOutboxComponent } from './pages/admin-dashboard-outbox/admin-dashboard-outbox.component';
import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { SiteEditorComponent } from './pages/site-editor/site-editor.component';
import { HomePageFormComponent } from './components/home-page-form/home-page-form.component';
import { ArchiveCommunityDevelopmentFormComponent } from './components/archive-community-development-form/archive-community-development-form.component';
import { ArchiveVoiceOfThePeopleFormComponent } from './components/archive-voice-of-the-people-form/archive-voice-of-the-people-form.component';
import { ConfirmMembershipFormComponent } from './components/confirm-membership-form/confirm-membership-form.component';
import { EydMissionFormComponent } from './components/eyd-mission-form/eyd-mission-form.component';
import { HomeFormComponent } from './components/home-form/home-form.component';
import { OurBeliefsDemocracyFormComponent } from './components/our-beliefs-democracy-form/our-beliefs-democracy-form.component';
import { OurBeliefsIndustryFormComponent } from './components/our-beliefs-industry-form/our-beliefs-industry-form.component';
import { OurBeliefsInnovationFormComponent } from './components/our-beliefs-innovation-form/our-beliefs-innovation-form.component';
import { OurBeliefsSocialJusticeFormComponent } from './components/our-beliefs-social-justice-form/our-beliefs-social-justice-form.component';



@NgModule({
  declarations: [
    AdminDashboardMemberRequestsComponent,
    AdminDashboardHomeComponent,
    AdminDashboardInboxComponent,
    AdminDashboardOutboxComponent,
    AdminSideBarComponent,
    AdminFooterComponent,
    SiteEditorComponent,
    HomePageFormComponent,
    ArchiveCommunityDevelopmentFormComponent,
    ArchiveVoiceOfThePeopleFormComponent,
    ConfirmMembershipFormComponent,
    EydMissionFormComponent,
    HomeFormComponent,
    OurBeliefsDemocracyFormComponent,
    OurBeliefsIndustryFormComponent,
    OurBeliefsInnovationFormComponent,
    OurBeliefsSocialJusticeFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
