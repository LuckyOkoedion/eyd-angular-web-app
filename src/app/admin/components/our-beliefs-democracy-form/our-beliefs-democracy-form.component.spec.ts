import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefsDemocracyFormComponent } from './our-beliefs-democracy-form.component';

describe('OurBeliefsDemocracyFormComponent', () => {
  let component: OurBeliefsDemocracyFormComponent;
  let fixture: ComponentFixture<OurBeliefsDemocracyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeliefsDemocracyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefsDemocracyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
