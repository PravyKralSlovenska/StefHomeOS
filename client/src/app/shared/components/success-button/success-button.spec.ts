import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessButton } from './success-button';

describe('SuccessButton', () => {
  let component: SuccessButton;
  let fixture: ComponentFixture<SuccessButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessButton],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
