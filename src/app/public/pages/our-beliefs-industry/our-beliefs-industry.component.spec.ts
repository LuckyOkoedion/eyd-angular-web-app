import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefsIndustryComponent } from './our-beliefs-industry.component';

describe('OurBeliefsIndustryComponent', () => {
  let component: OurBeliefsIndustryComponent;
  let fixture: ComponentFixture<OurBeliefsIndustryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeliefsIndustryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefsIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
