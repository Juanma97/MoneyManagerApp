import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseFormPage } from './expense-form.page';

describe('ExpenseFormPage', () => {
  let component: ExpenseFormPage;
  let fixture: ComponentFixture<ExpenseFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
