import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EydMissionFormComponent } from './eyd-mission-form.component';

describe('EydMissionFormComponent', () => {
  let component: EydMissionFormComponent;
  let fixture: ComponentFixture<EydMissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EydMissionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EydMissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
