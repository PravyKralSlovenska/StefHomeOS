import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dots } from './dots';

describe('Dots', () => {
  let component: Dots;
  let fixture: ComponentFixture<Dots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dots],
    }).compileComponents();

    fixture = TestBed.createComponent(Dots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
