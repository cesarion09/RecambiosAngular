import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarModelComponent } from './calendar-model.component';

describe('CalendarModelComponent', () => {
  let component: CalendarModelComponent;
  let fixture: ComponentFixture<CalendarModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

