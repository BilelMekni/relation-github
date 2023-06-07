import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompagnantTableComponent } from './accompagnant-table.component';

describe('AccompagnantTableComponent', () => {
  let component: AccompagnantTableComponent;
  let fixture: ComponentFixture<AccompagnantTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccompagnantTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccompagnantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
