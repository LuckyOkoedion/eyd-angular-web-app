import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefsInnovationFormComponent } from './our-beliefs-innovation-form.component';

describe('OurBeliefsInnovationFormComponent', () => {
  let component: OurBeliefsInnovationFormComponent;
  let fixture: ComponentFixture<OurBeliefsInnovationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeliefsInnovationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefsInnovationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
