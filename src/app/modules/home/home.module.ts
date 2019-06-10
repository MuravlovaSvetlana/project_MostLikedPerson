import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRoutingModule } from "./home-routing.module";
import { HomeService } from './services/home.service';
import { HomeInnerComponent } from './components/home-inner/home-inner.component';
import { ChallengeCardComponent } from '../../common/components/challenge-card/challenge-card.component';
import { ChallengesListComponent } from '../../common/components/challenges-list/challenges-list.component';
import { EmptyListModule } from '../empty-list/empty-list.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeInnerComponent,
    ChallengeCardComponent,
    ChallengesListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EmptyListModule,
    LoaderModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
