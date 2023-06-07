import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordoWomenForComponent } from './cordo-women-for.component';

describe('CordoWomenForComponent', () => {
  let component: CordoWomenForComponent;
  let fixture: ComponentFixture<CordoWomenForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordoWomenForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordoWomenForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
