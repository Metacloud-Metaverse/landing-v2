import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundElementComponent } from './sound-element.component';

describe('SoundElementComponent', () => {
  let component: SoundElementComponent;
  let fixture: ComponentFixture<SoundElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
