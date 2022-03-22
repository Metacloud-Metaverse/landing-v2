import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaKitPageComponent } from './media-kit-page.component';

describe('MediaKitPageComponent', () => {
  let component: MediaKitPageComponent;
  let fixture: ComponentFixture<MediaKitPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaKitPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaKitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
