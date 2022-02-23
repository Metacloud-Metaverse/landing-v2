import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIComponent } from './step-i.component';

describe('StepIComponent', () => {
  let component: StepIComponent;
  let fixture: ComponentFixture<StepIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
