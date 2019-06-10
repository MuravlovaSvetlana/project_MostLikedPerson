import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyListModule } from 'app/modules/empty-list/empty-list.module';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { ProfileControlsComponent } from './components/profile-controls/profile-controls.component';
import { ProfileTabsContainerComponent } from './components/profile-tabs-container/profile-tabs-container.component';
import { ProfileSelfiesComponent } from './components/profile-selfies/profile-selfies.component';
import { PicturePreviewComponent } from './components/picture-preview/picture-preview.component';
import { ProfileMyGloriesComponent } from './components/profile-my-glories/profile-my-glories.component';
import { ProfileFavouritesComponent } from './components/profile-favourites/profile-favourites.component';
import { ProfileFollowersComponent } from './components/profile-followers/profile-followers.component';
import { ProfileFollowerFollowingItemComponent } from './components/profile-follower-following-item/profile-follower-following-item.component';
import { DirectivesModule } from '../../common/directives/directives.module';
import { CarouselPictureModule } from '../carousel-picture/carousel-picture.module';

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
    ProfileCoverComponent,
    ProfileControlsComponent,
    ProfileTabsContainerComponent,
    ProfileSelfiesComponent,
    PicturePreviewComponent,
    ProfileMyGloriesComponent,
    ProfileFavouritesComponent,
    ProfileFollowersComponent,
    ProfileFollowerFollowingItemComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    EmptyListModule,
    DirectivesModule,
    CarouselPictureModule
  ]
})
export class UserModule { }
