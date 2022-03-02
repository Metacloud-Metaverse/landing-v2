import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsModalComponent } from './concerts-modal.component';

describe('ConcertsModalComponent', () => {
  let component: ConcertsModalComponent;
  let fixture: ComponentFixture<ConcertsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
