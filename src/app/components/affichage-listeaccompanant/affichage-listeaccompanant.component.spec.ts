import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageListeaccompanantComponent } from './affichage-listeaccompanant.component';

describe('AffichageListeaccompanantComponent', () => {
  let component: AffichageListeaccompanantComponent;
  let fixture: ComponentFixture<AffichageListeaccompanantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichageListeaccompanantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageListeaccompanantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
