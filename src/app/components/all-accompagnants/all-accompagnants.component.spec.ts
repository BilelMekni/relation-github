import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccompagnantsComponent } from './all-accompagnants.component';

describe('AllAccompagnantsComponent', () => {
  let component: AllAccompagnantsComponent;
  let fixture: ComponentFixture<AllAccompagnantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAccompagnantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccompagnantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
