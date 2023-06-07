import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAccompagnantComponent } from './modifier-accompagnant.component';

describe('ModifierAccompagnantComponent', () => {
  let component: ModifierAccompagnantComponent;
  let fixture: ComponentFixture<ModifierAccompagnantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierAccompagnantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAccompagnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
