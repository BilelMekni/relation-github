import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanteInformationComponent } from './sante-information.component';

describe('SanteInformationComponent', () => {
  let component: SanteInformationComponent;
  let fixture: ComponentFixture<SanteInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanteInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
