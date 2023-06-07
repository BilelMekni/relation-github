import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPublicationComponent } from './consulter-publication.component';

describe('ConsulterPublicationComponent', () => {
  let component: ConsulterPublicationComponent;
  let fixture: ComponentFixture<ConsulterPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
