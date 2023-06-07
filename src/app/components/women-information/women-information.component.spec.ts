import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenInformationComponent } from './women-information.component';

describe('WomenInformationComponent', () => {
  let component: WomenInformationComponent;
  let fixture: ComponentFixture<WomenInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomenInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
