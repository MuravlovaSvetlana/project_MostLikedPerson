import { Component,
         EventEmitter, 
         Input, 
         OnInit, 
         Output
} from '@angular/core';

@Component({
  selector: 'app-profile-cover',
  templateUrl: './profile-cover.component.html',
  styleUrls: ['./profile-cover.component.css']
})
export class ProfileCoverComponent implements OnInit {
  @Input() cover;
  @Output('upload') upload = new EventEmitter();
  @Input() isCurrentUser: boolean;
  constructor() { }

  ngOnInit() {}

  loadCover(input): void {
    const [newCover] = input.files;
    if (newCover) {
      this.upload.emit(newCover);
    }
  }
}
