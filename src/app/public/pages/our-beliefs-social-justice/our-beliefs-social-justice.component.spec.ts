import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefsSocialJusticeComponent } from './our-beliefs-social-justice.component';

describe('OurBeliefsSocialJusticeComponent', () => {
  let component: OurBeliefsSocialJusticeComponent;
  let fixture: ComponentFixture<OurBeliefsSocialJusticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeliefsSocialJusticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefsSocialJusticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
