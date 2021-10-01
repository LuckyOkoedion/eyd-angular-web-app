import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardMemberRequestsComponent } from './admin-dashboard-member-requests.component';

describe('AdminDashboardMemberRequestsComponent', () => {
  let component: AdminDashboardMemberRequestsComponent;
  let fixture: ComponentFixture<AdminDashboardMemberRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardMemberRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardMemberRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
