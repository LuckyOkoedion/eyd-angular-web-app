import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveVoiceOfThePeopleFormComponent } from './archive-voice-of-the-people-form.component';

describe('ArchiveVoiceOfThePeopleFormComponent', () => {
  let component: ArchiveVoiceOfThePeopleFormComponent;
  let fixture: ComponentFixture<ArchiveVoiceOfThePeopleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveVoiceOfThePeopleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveVoiceOfThePeopleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
