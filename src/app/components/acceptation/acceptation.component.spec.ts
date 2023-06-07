import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptationComponent } from './acceptation.component';

describe('AcceptationComponent', () => {
  let component: AcceptationComponent;
  let fixture: ComponentFixture<AcceptationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
