import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSeeComponent } from './forum-see.component';

describe('ForumSeeComponent', () => {
  let component: ForumSeeComponent;
  let fixture: ComponentFixture<ForumSeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForumSeeComponent]
    });
    fixture = TestBed.createComponent(ForumSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
