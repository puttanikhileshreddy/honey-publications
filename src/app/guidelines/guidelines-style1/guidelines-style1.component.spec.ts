import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidelinesStyle1Component } from './guidelines-style1.component';

describe('GuidelinesStyle1Component', () => {
  let component: GuidelinesStyle1Component;
  let fixture: ComponentFixture<GuidelinesStyle1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidelinesStyle1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidelinesStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
