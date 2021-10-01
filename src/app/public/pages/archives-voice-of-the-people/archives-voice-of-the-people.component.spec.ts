import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesVoiceOfThePeopleComponent } from './archives-voice-of-the-people.component';

describe('ArchivesVoiceOfThePeopleComponent', () => {
  let component: ArchivesVoiceOfThePeopleComponent;
  let fixture: ComponentFixture<ArchivesVoiceOfThePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivesVoiceOfThePeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesVoiceOfThePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
