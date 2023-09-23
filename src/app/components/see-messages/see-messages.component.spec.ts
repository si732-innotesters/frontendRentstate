import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMessagesComponent } from './see-messages.component';

describe('SeeMessagesComponent', () => {
  let component: SeeMessagesComponent;
  let fixture: ComponentFixture<SeeMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeMessagesComponent]
    });
    fixture = TestBed.createComponent(SeeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
