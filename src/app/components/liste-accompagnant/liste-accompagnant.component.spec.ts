import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAccompagnantComponent } from './liste-accompagnant.component';

describe('ListeAccompagnantComponent', () => {
  let component: ListeAccompagnantComponent;
  let fixture: ComponentFixture<ListeAccompagnantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAccompagnantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAccompagnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
