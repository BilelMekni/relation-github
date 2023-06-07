import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordoWomenTwoComponent } from './cordo-women-two.component';

describe('CordoWomenTwoComponent', () => {
  let component: CordoWomenTwoComponent;
  let fixture: ComponentFixture<CordoWomenTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordoWomenTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordoWomenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
