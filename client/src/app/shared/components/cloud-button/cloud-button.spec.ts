import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudButton } from './cloud-button';

describe('CloudButton', () => {
  let component: CloudButton;
  let fixture: ComponentFixture<CloudButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudButton],
    }).compileComponents();

    fixture = TestBed.createComponent(CloudButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
