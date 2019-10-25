import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingFeesComponent } from './processing-fees.component';

describe('ProcessingFeesComponent', () => {
  let component: ProcessingFeesComponent;
  let fixture: ComponentFixture<ProcessingFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessingFeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
