import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDashboardSendRequestComponent } from './member-dashboard-send-request.component';

describe('MemberDashboardSendRequestComponent', () => {
  let component: MemberDashboardSendRequestComponent;
  let fixture: ComponentFixture<MemberDashboardSendRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDashboardSendRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDashboardSendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
