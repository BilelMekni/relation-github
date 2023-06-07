import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordonneeInfhommeComponent } from './cordonnee-infhomme.component';

describe('CordonneeInfhommeComponent', () => {
  let component: CordonneeInfhommeComponent;
  let fixture: ComponentFixture<CordonneeInfhommeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordonneeInfhommeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordonneeInfhommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
