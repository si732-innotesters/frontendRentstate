import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPropertiesComponent } from './your-properties.component';

describe('YourPropertiesComponent', () => {
  let component: YourPropertiesComponent;
  let fixture: ComponentFixture<YourPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourPropertiesComponent]
    });
    fixture = TestBed.createComponent(YourPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
