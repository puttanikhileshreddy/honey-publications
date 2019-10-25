import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerReviewProcessComponent } from './peer-review-process.component';

describe('PeerReviewProcessComponent', () => {
  let component: PeerReviewProcessComponent;
  let fixture: ComponentFixture<PeerReviewProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerReviewProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerReviewProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
