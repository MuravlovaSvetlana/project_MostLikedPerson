import { Component,
         OnInit,
         Input,
         Output,
         EventEmitter
} from '@angular/core';
import { NewItem} from '../../interfaces/news.interface';
import { UserService } from '@services/user.service';
import { GlobalAuthService } from '@services/global-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() item: NewItem;
  @Output() followUser = new EventEmitter();
  @Output() carouselImages = new EventEmitter();
  authId: string;
  id: string;
  constructor(
    private authService: GlobalAuthService,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;   
    this.authId = this.authService.userId;
  }

  chooseUser(): void {
    const id = this.item.owner._id;
    this.userService.getUserById(id).subscribe((res) => {
      this.router.navigate(['users/', id]);
    })
  }

  pressButton(): void {
    this.userService.followUser(this.item.owner._id).subscribe((res) => {
      this.followUser.emit();
    })
  }

  carouselImg(id: Array<string>): void {
    this.carouselImages.emit(id);
  }

}
