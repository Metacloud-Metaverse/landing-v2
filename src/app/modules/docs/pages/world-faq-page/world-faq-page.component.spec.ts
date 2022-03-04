import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldFaqPageComponent } from './world-faq-page.component';

describe('WorldFaqPageComponent', () => {
  let component: WorldFaqPageComponent;
  let fixture: ComponentFixture<WorldFaqPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldFaqPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldFaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
