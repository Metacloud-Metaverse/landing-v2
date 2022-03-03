import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldIntroductionPageComponent } from './world-introduction-page.component';

describe('WorldIntroductionPageComponent', () => {
  let component: WorldIntroductionPageComponent;
  let fixture: ComponentFixture<WorldIntroductionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldIntroductionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldIntroductionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
