import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAllCompagnantsComponent } from './modifier-all-compagnants.component';

describe('ModifierAllCompagnantsComponent', () => {
  let component: ModifierAllCompagnantsComponent;
  let fixture: ComponentFixture<ModifierAllCompagnantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierAllCompagnantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAllCompagnantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
