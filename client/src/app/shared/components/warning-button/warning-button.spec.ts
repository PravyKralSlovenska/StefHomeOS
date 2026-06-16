import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningButton } from './warning-button';

describe('WarningButton', () => {
  let component: WarningButton;
  let fixture: ComponentFixture<WarningButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarningButton],
    }).compileComponents();

    fixture = TestBed.createComponent(WarningButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
