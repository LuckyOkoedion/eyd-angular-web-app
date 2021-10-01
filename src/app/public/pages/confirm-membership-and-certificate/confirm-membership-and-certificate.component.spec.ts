import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMembershipAndCertificateComponent } from './confirm-membership-and-certificate.component';

describe('ConfirmMembershipAndCertificateComponent', () => {
  let component: ConfirmMembershipAndCertificateComponent;
  let fixture: ComponentFixture<ConfirmMembershipAndCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmMembershipAndCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMembershipAndCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
