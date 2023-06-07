import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatioUserComponent } from './validatio-user.component';

describe('ValidatioUserComponent', () => {
  let component: ValidatioUserComponent;
  let fixture: ComponentFixture<ValidatioUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatioUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatioUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
