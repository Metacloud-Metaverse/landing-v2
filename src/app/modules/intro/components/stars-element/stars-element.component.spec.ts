import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsElementComponent } from './stars-element.component';

describe('StarsElementComponent', () => {
  let component: StarsElementComponent;
  let fixture: ComponentFixture<StarsElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
