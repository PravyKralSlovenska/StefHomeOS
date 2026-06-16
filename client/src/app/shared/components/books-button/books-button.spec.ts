import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksButton } from './books-button';

describe('BooksButton', () => {
  let component: BooksButton;
  let fixture: ComponentFixture<BooksButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksButton],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
