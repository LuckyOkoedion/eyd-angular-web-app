import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardOutboxComponent } from './admin-dashboard-outbox.component';

describe('AdminDashboardOutboxComponent', () => {
  let component: AdminDashboardOutboxComponent;
  let fixture: ComponentFixture<AdminDashboardOutboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardOutboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardOutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
