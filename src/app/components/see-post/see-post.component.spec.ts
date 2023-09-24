import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePostComponent } from './see-post.component';

describe('SeePostComponent', () => {
  let component: SeePostComponent;
  let fixture: ComponentFixture<SeePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeePostComponent]
    });
    fixture = TestBed.createComponent(SeePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
