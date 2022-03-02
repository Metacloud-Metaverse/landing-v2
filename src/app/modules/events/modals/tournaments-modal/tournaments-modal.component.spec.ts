import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentsModalComponent } from './tournaments-modal.component';

describe('TournamentsModalComponent', () => {
  let component: TournamentsModalComponent;
  let fixture: ComponentFixture<TournamentsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
