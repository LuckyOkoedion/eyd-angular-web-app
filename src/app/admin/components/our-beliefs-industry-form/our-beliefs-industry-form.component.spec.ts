import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefsIndustryFormComponent } from './our-beliefs-industry-form.component';

describe('OurBeliefsIndustryFormComponent', () => {
  let component: OurBeliefsIndustryFormComponent;
  let fixture: ComponentFixture<OurBeliefsIndustryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeliefsIndustryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefsIndustryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
