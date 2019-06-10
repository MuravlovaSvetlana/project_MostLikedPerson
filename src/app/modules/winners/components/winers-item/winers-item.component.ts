import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Winner } from '../../interfaces/winners-intarface';

@Component({
  selector: 'app-winers-item',
  templateUrl: './winers-item.component.html',
  styleUrls: ['./winers-item.component.css']
})
export class WinersItemComponent implements OnInit {
  @Input() winner: Winner;
  @Output() carouselImages = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  showCarousel() {
    this.carouselImages.emit();
  }

}
