import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnersRoutingModule } from './winners-routing.module';
import { WinnersComponent } from './pages/winners/winners.component';
import { WinersListComponent } from './components/winers-list/winers-list.component';
import { WinersItemComponent } from './components/winers-item/winers-item.component';
import { DirectivesModule } from '../../common/directives/directives.module';
import { CarouselPictureModule } from '../carousel-picture/carousel-picture.module';


@NgModule({
  declarations: [
    WinnersComponent,
    WinersListComponent,
    WinersItemComponent,
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule,
    DirectivesModule,
    CarouselPictureModule
  ]
})
export class WinnersModule { }
