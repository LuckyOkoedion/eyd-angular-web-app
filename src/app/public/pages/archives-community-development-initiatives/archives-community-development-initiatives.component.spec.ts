import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesCommunityDevelopmentInitiativesComponent } from './archives-community-development-initiatives.component';

describe('ArchivesCommunityDevelopmentInitiativesComponent', () => {
  let component: ArchivesCommunityDevelopmentInitiativesComponent;
  let fixture: ComponentFixture<ArchivesCommunityDevelopmentInitiativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivesCommunityDevelopmentInitiativesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesCommunityDevelopmentInitiativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
