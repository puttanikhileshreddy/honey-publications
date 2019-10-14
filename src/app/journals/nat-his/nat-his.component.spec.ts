import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatHisComponent } from './nat-his.component';

describe('NatHisComponent', () => {
  let component: NatHisComponent;
  let fixture: ComponentFixture<NatHisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatHisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
