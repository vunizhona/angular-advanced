import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCheckerComponent } from './comments-checker.component';

describe('CommentsCheckerComponent', () => {
  let component: CommentsCheckerComponent;
  let fixture: ComponentFixture<CommentsCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsCheckerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentsCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
