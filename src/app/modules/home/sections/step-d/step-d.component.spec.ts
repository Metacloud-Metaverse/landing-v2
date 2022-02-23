import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDComponent } from './step-d.component';

describe('StepDComponent', () => {
  let component: StepDComponent;
  let fixture: ComponentFixture<StepDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
