import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatersModalComponent } from './theaters-modal.component';

describe('TheatersModalComponent', () => {
  let component: TheatersModalComponent;
  let fixture: ComponentFixture<TheatersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
