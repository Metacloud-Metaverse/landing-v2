import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastsModalComponent } from './podcasts-modal.component';

describe('PodcastsModalComponent', () => {
  let component: PodcastsModalComponent;
  let fixture: ComponentFixture<PodcastsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
