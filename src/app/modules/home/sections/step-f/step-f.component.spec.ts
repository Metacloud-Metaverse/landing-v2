import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFComponent } from './step-f.component';

describe('StepFComponent', () => {
  let component: StepFComponent;
  let fixture: ComponentFixture<StepFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
