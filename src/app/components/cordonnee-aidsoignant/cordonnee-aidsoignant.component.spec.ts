import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordonneeAidsoignantComponent } from './cordonnee-aidsoignant.component';

describe('CordonneeAidsoignantComponent', () => {
  let component: CordonneeAidsoignantComponent;
  let fixture: ComponentFixture<CordonneeAidsoignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordonneeAidsoignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordonneeAidsoignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
