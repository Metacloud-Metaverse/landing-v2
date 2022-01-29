import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSpeedElementComponent } from './line-speed-element.component';

describe('LineSpeedElementComponent', () => {
  let component: LineSpeedElementComponent;
  let fixture: ComponentFixture<LineSpeedElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineSpeedElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineSpeedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
