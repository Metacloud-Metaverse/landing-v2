import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepJComponent } from './step-j.component';

describe('StepJComponent', () => {
  let component: StepJComponent;
  let fixture: ComponentFixture<StepJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
