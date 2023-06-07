import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordoWomenThreeComponent } from './cordo-women-three.component';

describe('CordoWomenThreeComponent', () => {
  let component: CordoWomenThreeComponent;
  let fixture: ComponentFixture<CordoWomenThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordoWomenThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordoWomenThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
