import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuscriptGuidelinesComponent } from './manuscript-guidelines.component';

describe('ManuscriptGuidelinesComponent', () => {
  let component: ManuscriptGuidelinesComponent;
  let fixture: ComponentFixture<ManuscriptGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuscriptGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuscriptGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
