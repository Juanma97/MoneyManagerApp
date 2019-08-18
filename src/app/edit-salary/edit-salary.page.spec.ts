import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaryPage } from './edit-salary.page';

describe('EditSalaryPage', () => {
  let component: EditSalaryPage;
  let fixture: ComponentFixture<EditSalaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSalaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSalaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
