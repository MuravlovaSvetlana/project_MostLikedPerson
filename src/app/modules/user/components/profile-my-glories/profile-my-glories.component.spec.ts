import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMyGloriesComponent } from './profile-my-glories.component';

describe('ProfileMyGloriesComponent', () => {
  let component: ProfileMyGloriesComponent;
  let fixture: ComponentFixture<ProfileMyGloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMyGloriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMyGloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
