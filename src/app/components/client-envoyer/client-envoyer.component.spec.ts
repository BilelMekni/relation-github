import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientEnvoyerComponent } from './client-envoyer.component';

describe('ClientEnvoyerComponent', () => {
  let component: ClientEnvoyerComponent;
  let fixture: ComponentFixture<ClientEnvoyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientEnvoyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientEnvoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
