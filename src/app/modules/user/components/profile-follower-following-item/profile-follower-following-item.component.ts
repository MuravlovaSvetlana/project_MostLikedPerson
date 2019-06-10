import { Component, 
         OnInit, 
         Input, 
         Output, 
         EventEmitter
} from '@angular/core';
import { Follower } from '../../interfaces/user-intarface';
import { GlobalAuthService } from '@services/global-auth.service';

@Component({
  selector: 'app-profile-follower-following-item',
  templateUrl: './profile-follower-following-item.component.html',
  styleUrls: ['./profile-follower-following-item.component.css']
})
export class ProfileFollowerFollowingItemComponent implements OnInit {
  @Input() member: Follower;
  //@Input() followings: Array<string>;
  @Output() clickUser = new EventEmitter<string>();
  @Output() pressButton = new EventEmitter<string>();
  authId: string;
  //id: string;
  constructor(
    private globalAuth: GlobalAuthService,
  ) { }

  ngOnInit() {
    this.authId = this.globalAuth.userId;
  }

  chooseUser():void {
    const id = this.member._id;
    this.clickUser.emit(id);
  }

  clickButton(): void {
    const id = this.member._id;
    this.pressButton.emit(id);
  }
}
