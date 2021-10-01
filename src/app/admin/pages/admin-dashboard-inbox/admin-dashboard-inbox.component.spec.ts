import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardInboxComponent } from './admin-dashboard-inbox.component';

describe('AdminDashboardInboxComponent', () => {
  let component: AdminDashboardInboxComponent;
  let fixture: ComponentFixture<AdminDashboardInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardInboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
