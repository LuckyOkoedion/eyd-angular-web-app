import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EydMissionComponent } from './eyd-mission.component';

describe('EydMissionComponent', () => {
  let component: EydMissionComponent;
  let fixture: ComponentFixture<EydMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EydMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EydMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
