import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProfileComponent } from './see-profile.component';

describe('SeeProfileComponent', () => {
  let component: SeeProfileComponent;
  let fixture: ComponentFixture<SeeProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeProfileComponent]
    });
    fixture = TestBed.createComponent(SeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
