import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideStyleComponent } from './guide-style.component';

describe('GuideStyleComponent', () => {
  let component: GuideStyleComponent;
  let fixture: ComponentFixture<GuideStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
