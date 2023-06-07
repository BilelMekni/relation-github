import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPublicaitonsComponent } from './success-publicaitons.component';

describe('SuccessPublicaitonsComponent', () => {
  let component: SuccessPublicaitonsComponent;
  let fixture: ComponentFixture<SuccessPublicaitonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessPublicaitonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPublicaitonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
