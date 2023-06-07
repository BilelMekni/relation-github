import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordonneInferfemmeComponent } from './cordonne-inferfemme.component';

describe('CordonneInferfemmeComponent', () => {
  let component: CordonneInferfemmeComponent;
  let fixture: ComponentFixture<CordonneInferfemmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordonneInferfemmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordonneInferfemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
