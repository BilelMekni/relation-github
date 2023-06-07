import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSignupComponent } from './validation-signup.component';

describe('ValidationSignupComponent', () => {
  let component: ValidationSignupComponent;
  let fixture: ComponentFixture<ValidationSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
