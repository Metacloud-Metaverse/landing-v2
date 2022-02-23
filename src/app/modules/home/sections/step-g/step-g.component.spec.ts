import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGComponent } from './step-g.component';

describe('StepGComponent', () => {
  let component: StepGComponent;
  let fixture: ComponentFixture<StepGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
