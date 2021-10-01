import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefsSocialJusticeFormComponent } from './our-beliefs-social-justice-form.component';

describe('OurBeliefsSocialJusticeFormComponent', () => {
  let component: OurBeliefsSocialJusticeFormComponent;
  let fixture: ComponentFixture<OurBeliefsSocialJusticeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeliefsSocialJusticeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefsSocialJusticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
