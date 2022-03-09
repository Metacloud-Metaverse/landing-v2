import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonElementComponent } from './coming-soon-element.component';

describe('ComingSoonElementComponent', () => {
  let component: ComingSoonElementComponent;
  let fixture: ComponentFixture<ComingSoonElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSoonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
