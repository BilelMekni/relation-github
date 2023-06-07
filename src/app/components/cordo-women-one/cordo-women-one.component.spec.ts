import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordoWomenOneComponent } from './cordo-women-one.component';

describe('CordoWomenOneComponent', () => {
  let component: CordoWomenOneComponent;
  let fixture: ComponentFixture<CordoWomenOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordoWomenOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordoWomenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
