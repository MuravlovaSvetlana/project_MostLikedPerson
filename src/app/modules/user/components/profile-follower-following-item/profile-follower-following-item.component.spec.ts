import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowerFollowingItemComponent } from './profile-follower-following-item.component';

describe('ProfileFollowerFollowingItemComponent', () => {
  let component: ProfileFollowerFollowingItemComponent;
  let fixture: ComponentFixture<ProfileFollowerFollowingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowerFollowingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowerFollowingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
