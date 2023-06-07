import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirResponseComponent } from './voir-response.component';

describe('VoirResponseComponent', () => {
  let component: VoirResponseComponent;
  let fixture: ComponentFixture<VoirResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
