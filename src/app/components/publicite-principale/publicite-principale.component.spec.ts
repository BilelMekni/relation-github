import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicitePrincipaleComponent } from './publicite-principale.component';

describe('PublicitePrincipaleComponent', () => {
  let component: PublicitePrincipaleComponent;
  let fixture: ComponentFixture<PublicitePrincipaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicitePrincipaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicitePrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
