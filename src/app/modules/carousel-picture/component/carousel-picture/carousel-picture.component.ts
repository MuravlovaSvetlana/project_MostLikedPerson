import { Component,
         OnInit, 
         Input, 
         EventEmitter, 
         Output 
} from '@angular/core';

@Component({
  selector: 'app-carousel-picture',
  templateUrl: './carousel-picture.component.html',
  styleUrls: ['./carousel-picture.component.css']
})
export class CarouselPictureComponent implements OnInit {
  @Input() carouselId: Array<string>;
  @Output() closeCarousel = new EventEmitter();
  constructor() { }
  ngOnInit() {}

  close() {
    this.closeCarousel.emit();
  }
}
