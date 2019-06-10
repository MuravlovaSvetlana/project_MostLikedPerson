import { Component,
         OnInit, 
         Input, 
         EventEmitter, 
         Output 
} from '@angular/core';
import { Picture } from '../../interfaces/news.interface';

@Component({
  selector: 'app-picture-item',
  templateUrl: './picture-item.component.html',
  styleUrls: ['./picture-item.component.css']
})
export class PictureItemComponent implements OnInit {
  @Input() picture: Picture;
  @Input() length: number;
  @Output() pictureId = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  showCarusel(): void {
    this.pictureId.emit();
  }

}
