import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesButton } from './notes-button';

describe('NotesButton', () => {
  let component: NotesButton;
  let fixture: ComponentFixture<NotesButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesButton],
    }).compileComponents();

    fixture = TestBed.createComponent(NotesButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
