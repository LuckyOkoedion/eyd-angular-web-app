import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { EydMissionComponent } from './pages/eyd-mission/eyd-mission.component';
import { EydVisionComponent } from './pages/eyd-vision/eyd-vision.component';
import { OurBeliefsDemocracyComponent } from './pages/our-beliefs-democracy/our-beliefs-democracy.component';
import { OurBeliefsIndustryComponent } from './pages/our-beliefs-industry/our-beliefs-industry.component';
import { OurBeliefsInnovationComponent } from './pages/our-beliefs-innovation/our-beliefs-innovation.component';
import { OurBeliefsSocialJusticeComponent } from './pages/our-beliefs-social-justice/our-beliefs-social-justice.component';
import { ArchivesCommunityDevelopmentInitiativesComponent } from './pages/archives-community-development-initiatives/archives-community-development-initiatives.component';
import { ArchivesVoiceOfThePeopleComponent } from './pages/archives-voice-of-the-people/archives-voice-of-the-people.component';
import { ConfirmMembershipAndCertificateComponent } from './pages/confirm-membership-and-certificate/confirm-membership-and-certificate.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { MemberDashboardComponent } from './pages/member-dashboard/member-dashboard.component';
import { MemberDashboardInboxComponent } from './pages/member-dashboard-inbox/member-dashboard-inbox.component';
import { MemberDashboardOutboxComponent } from './pages/member-dashboard-outbox/member-dashboard-outbox.component';
import { MemberDashboardSendRequestComponent } from './pages/member-dashboard-send-request/member-dashboard-send-request.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';



@NgModule({
  declarations: [
    HomeComponent,
    EydMissionComponent,
    EydVisionComponent,
    OurBeliefsDemocracyComponent,
    OurBeliefsIndustryComponent,
    OurBeliefsInnovationComponent,
    OurBeliefsSocialJusticeComponent,
    ArchivesCommunityDevelopmentInitiativesComponent,
    ArchivesVoiceOfThePeopleComponent,
    ConfirmMembershipAndCertificateComponent,
    LoginComponent,
    SignupComponent,
    ContactUsComponent,
    MemberDashboardComponent,
    MemberDashboardInboxComponent,
    MemberDashboardOutboxComponent,
    MemberDashboardSendRequestComponent,
    FooterComponent,
    HeaderComponent,
    TermsOfUseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
