import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisIsUsefulComponentComponent } from './this-is-useful-component.component';

describe('ThisIsUsefulComponentComponent', () => {
  let component: ThisIsUsefulComponentComponent;
  let fixture: ComponentFixture<ThisIsUsefulComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThisIsUsefulComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisIsUsefulComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
