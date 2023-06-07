import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordMaintenanceComponent } from './cord-maintenance.component';

describe('CordMaintenanceComponent', () => {
  let component: CordMaintenanceComponent;
  let fixture: ComponentFixture<CordMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
