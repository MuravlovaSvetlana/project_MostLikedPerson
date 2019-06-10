import { Component, OnInit } from '@angular/core';
import { GlobalAuthService } from "app/common/services/global-auth.service";
import { UserService } from "app/common/services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from '../../interfaces/user-intarface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  authUserId: string;
  id: string;
  activeTab = 'selfies';
  isCurrentUser: boolean;
  constructor(
    private globalAuth: GlobalAuthService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
    this.getUser();
    this.isCurrentUser = this.id === this.authUserId ? true : false;
    this.uploadNewUser();
  }

  getUser(): void {
    this.userService.getUserById(this.id).subscribe((user: User) => {
      if (user._id) {
        this.user = user;
      }
    });
  }

  uploadCover(cover): void {
    this.userService.uploadCover(cover).subscribe((res) => {
      if (!res.error) {
        this.getUser();
      }
    });
  }

  uploadNewUser(): void {
    this.route.params.subscribe(routeParams => {
      this.userService.getUserById(routeParams.id).subscribe((user: User) => {
        if (user._id) {
          this.user = user;
        }
        this.isCurrentUser = user._id === this.authUserId ? true : false;
      });    
    });
  }

  updateFollowers() {
    this.userService.getUserById(this.id).subscribe((user: User) => {
      if (user._id) {
        this.user = user;
      }
    });
  }
}
