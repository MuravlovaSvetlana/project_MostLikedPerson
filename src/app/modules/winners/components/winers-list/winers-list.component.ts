import { Component, OnInit, Input } from '@angular/core';
import { Winners, Winner } from '../../interfaces/winners-intarface';

@Component({
  selector: 'app-winers-list',
  templateUrl: './winers-list.component.html',
  styleUrls: ['./winers-list.component.css']
})
export class WinersListComponent implements OnInit {
  @Input() winners: Winners;
  winnersArray: Winner[];
  showCarousel = false;
  carouselId: Array<string> = [];
  constructor() { }

  ngOnInit() {
    this.winnersArray = this.winners.winners;
    this.winnersArray.forEach(item => {
      item.member_id.images.forEach(el => {
        this.carouselId.push(el.image_basic._id);
      });
    });
  }

  carouselImages(): void {
    this.showCarousel = true;
  }

  closeCarousel(): void {
    this.showCarousel = false;
  }
}
