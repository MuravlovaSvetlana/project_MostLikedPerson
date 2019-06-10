import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CurrentUserStoreService } from "app/common/services/current-user-store.service";
import { GlobalAuthService } from '@services/global-auth.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  @Input() notifIsHidden: boolean;
  userAvatar: string;
  userId: string;
  authUserId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private currentUser: CurrentUserStoreService,
    private authService: GlobalAuthService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    )
      .subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          this.isHidden = !!value.withoutHeader;
        });
      });
    
    this.currentUser.userWatcher.subscribe(({ avatar, _id }) => {
      if (_id) {
        this.userAvatar = avatar;
        this.userId = _id;
      }
    });
    this.authUserId = this.authService.userId;
  }

  reload(): void {
    console.log(this.authUserId, this.userId);
    this.router.navigate(['users/', this.authUserId]);
    this.userService.getUserById(this.authUserId).subscribe((res) => {
      if(this.authUserId === this.userId){
        window.location.reload();
      }
    })
  }

  showNotification(): void {
    this.notifIsHidden = !this.notifIsHidden;
  }

  signOut(): void {
    this.authService.signOut();
  }
}