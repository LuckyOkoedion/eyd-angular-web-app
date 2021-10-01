import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDashboardInboxComponent } from './member-dashboard-inbox.component';

describe('MemberDashboardInboxComponent', () => {
  let component: MemberDashboardInboxComponent;
  let fixture: ComponentFixture<MemberDashboardInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDashboardInboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDashboardInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
