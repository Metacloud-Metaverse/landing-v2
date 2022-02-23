import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepEComponent } from './step-e.component';

describe('StepEComponent', () => {
  let component: StepEComponent;
  let fixture: ComponentFixture<StepEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
