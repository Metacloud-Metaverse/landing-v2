import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepKComponent } from './step-k.component';

describe('StepKComponent', () => {
  let component: StepKComponent;
  let fixture: ComponentFixture<StepKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
