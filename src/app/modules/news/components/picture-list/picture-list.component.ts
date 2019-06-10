import { Component,
         OnInit, 
         Input, 
         EventEmitter, 
         Output 
} from '@angular/core';
import { NewItem } from '../../interfaces/news.interface';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {
  @Input() item: NewItem;
  @Output() carouselImg = new EventEmitter();
  carouselId: Array<string> = [];
  constructor() { }

  ngOnInit() {}

  showCarusel(): void {
    this.carouselId.splice(0, this.carouselId.length);
    this.item.pictures.forEach(item => {
      this.carouselId.push(item._id);
    });
    this.carouselImg.emit(this.carouselId);
  }

}
