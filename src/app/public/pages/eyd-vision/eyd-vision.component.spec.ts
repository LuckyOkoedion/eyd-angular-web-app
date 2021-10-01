import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EydVisionComponent } from './eyd-vision.component';

describe('EydVisionComponent', () => {
  let component: EydVisionComponent;
  let fixture: ComponentFixture<EydVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EydVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EydVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
