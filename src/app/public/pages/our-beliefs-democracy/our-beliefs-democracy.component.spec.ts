import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefsDemocracyComponent } from './our-beliefs-democracy.component';

describe('OurBeliefsDemocracyComponent', () => {
  let component: OurBeliefsDemocracyComponent;
  let fixture: ComponentFixture<OurBeliefsDemocracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeliefsDemocracyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefsDemocracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
