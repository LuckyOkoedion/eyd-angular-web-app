import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefsInnovationComponent } from './our-beliefs-innovation.component';

describe('OurBeliefsInnovationComponent', () => {
  let component: OurBeliefsInnovationComponent;
  let fixture: ComponentFixture<OurBeliefsInnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBeliefsInnovationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeliefsInnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
