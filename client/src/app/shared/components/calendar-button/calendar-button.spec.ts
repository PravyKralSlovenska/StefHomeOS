import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarButton } from './calendar-button';

describe('CalendarButton', () => {
  let component: CalendarButton;
  let fixture: ComponentFixture<CalendarButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
