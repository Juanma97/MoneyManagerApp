import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMoneyPage } from './save-money.page';

describe('SaveMoneyPage', () => {
  let component: SaveMoneyPage;
  let fixture: ComponentFixture<SaveMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveMoneyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
