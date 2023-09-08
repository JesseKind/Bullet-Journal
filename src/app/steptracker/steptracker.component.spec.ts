import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteptrackerComponent } from './steptracker.component';

describe('SteptrackerComponent', () => {
  let component: SteptrackerComponent;
  let fixture: ComponentFixture<SteptrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SteptrackerComponent]
    });
    fixture = TestBed.createComponent(SteptrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
