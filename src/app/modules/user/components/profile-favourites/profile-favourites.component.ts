import { Component, 
         OnInit, 
         Output, 
         EventEmitter 
} from '@angular/core';
import { UserService } from '@services/user.service';
import { Favourites } from '../../interfaces/user-intarface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-favourites',
  templateUrl: './profile-favourites.component.html',
  styleUrls: ['./profile-favourites.component.css']
})
export class ProfileFavouritesComponent implements OnInit {
  favourites: Favourites;
  id: string;
  @Output() img = new EventEmitter();
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.userService.uploadFavourities(this.id).subscribe((res: Favourites) => {
      this.favourites = res;
    })
  }
  
  showImg(): void {
    this.img.emit(this.favourites.images);
  }

}
