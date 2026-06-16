import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningPopup } from './warning-popup';

describe('WarningPopup', () => {
  let component: WarningPopup;
  let fixture: ComponentFixture<WarningPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningPopup],
    }).compileComponents();

    fixture = TestBed.createComponent(WarningPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
