import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourStyleComponent } from './jour-style.component';

describe('JourStyleComponent', () => {
  let component: JourStyleComponent;
  let fixture: ComponentFixture<JourStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
