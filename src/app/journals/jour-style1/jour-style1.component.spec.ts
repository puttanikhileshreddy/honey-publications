import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourStyle1Component } from './jour-style1.component';

describe('JourStyle1Component', () => {
  let component: JourStyle1Component;
  let fixture: ComponentFixture<JourStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
