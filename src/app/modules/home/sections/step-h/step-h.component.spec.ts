import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepHComponent } from './step-h.component';

describe('StepHComponent', () => {
  let component: StepHComponent;
  let fixture: ComponentFixture<StepHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
