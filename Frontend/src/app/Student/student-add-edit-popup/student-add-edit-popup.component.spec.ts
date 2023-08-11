import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddEditPopupComponent } from './student-add-edit-popup.component';

describe('StudentAddEditPopupComponent', () => {
  let component: StudentAddEditPopupComponent;
  let fixture: ComponentFixture<StudentAddEditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddEditPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAddEditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
