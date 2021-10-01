import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCommunityDevelopmentFormComponent } from './archive-community-development-form.component';

describe('ArchiveCommunityDevelopmentFormComponent', () => {
  let component: ArchiveCommunityDevelopmentFormComponent;
  let fixture: ComponentFixture<ArchiveCommunityDevelopmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveCommunityDevelopmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveCommunityDevelopmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
