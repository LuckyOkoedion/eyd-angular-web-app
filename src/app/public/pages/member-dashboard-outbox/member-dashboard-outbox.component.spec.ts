import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDashboardOutboxComponent } from './member-dashboard-outbox.component';

describe('MemberDashboardOutboxComponent', () => {
  let component: MemberDashboardOutboxComponent;
  let fixture: ComponentFixture<MemberDashboardOutboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDashboardOutboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDashboardOutboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
