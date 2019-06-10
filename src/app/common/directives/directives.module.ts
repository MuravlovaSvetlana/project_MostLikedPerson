import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgLoaderDirective } from './opacity.directive';
import { CarouselDirective } from './carousel.directive';

@NgModule({
  declarations: [
    ImgLoaderDirective,
    CarouselDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImgLoaderDirective,
    CarouselDirective,
  ]
})
export class DirectivesModule { }
