import { Component,
         OnInit, 
         Input, 
         Output, 
         EventEmitter 
} from '@angular/core';
import { FavouriteImg } from '../../interfaces/user-intarface';

@Component({
  selector: 'app-picture-preview',
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.css']
})
export class PicturePreviewComponent implements OnInit {
  @Input() image: FavouriteImg;
  @Output() img = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  show(): void {
    this.img.emit();
  }
}
