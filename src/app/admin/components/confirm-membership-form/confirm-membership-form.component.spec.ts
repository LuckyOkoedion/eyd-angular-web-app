import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmMembershipFormComponent } from './confirm-membership-form.component';

describe('ConfirmMembershipFormComponent', () => {
  let component: ConfirmMembershipFormComponent;
  let fixture: ComponentFixture<ConfirmMembershipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmMembershipFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmMembershipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
