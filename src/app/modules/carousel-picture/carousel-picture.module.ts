import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselPictureComponent } from './component/carousel-picture/carousel-picture.component';
import { DirectivesModule } from 'app/common/directives/directives.module';

@NgModule({
  declarations: [
    CarouselPictureComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    CarouselPictureComponent
  ]
})
export class CarouselPictureModule { }
