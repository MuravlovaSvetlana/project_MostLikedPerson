import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@services/user.service';
import { zip } from 'rxjs';
import { MessageService } from 'primeng/api';
import { GlobalAuthService } from '@services/global-auth.service';
import { Followers } from '../../interfaces/user-intarface';


@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  id: string;
  authId: string;
  result: Followers;
  @Output() chooseFollower = new EventEmitter<string>();
  @Input() activeTab:string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private messageService: MessageService,
    private authService: GlobalAuthService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authId = this.authService.userId;
    this.activeTab === 'followers' ? this.getFollowers(): this.getFollowings();
  }

  getFollowers(): void {
    zip (
      this.userService.uploadFollowers(this.id),
      this.userService.uploadFollowings(this.authId)
    )
      .subscribe(([res, resp]: any) => {
        this.result = this.mapHandler(res, resp);        
      }), (err) => {
        this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
        console.log(err);
      };
  }

  getFollowings(): void {
    zip (
      this.userService.uploadFollowings(this.id),
      this.userService.uploadFollowings(this.authId)
    )
      .subscribe(([res, resp]: any) => {
        this.result = this.mapHandler(res, resp);        
      }), (err) => {
        this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
        console.log(err);
      };
  }

  mapHandler(res, resp): Followers {
    let result = res;
    let arrId = [];
    resp.users.forEach(el => {
      arrId.push(el._id);
    });
    result.users.forEach(el => {
      el._buttonText = arrId.some (i => i === el._id) ? 'following' : 'follow';
    });
    return result;
  }

  clickUser(id: string): void {
    this.router.navigate(['users/', id]);    
  }

  pressButton(id: string): void {
    this.userService.followUser(id).subscribe(() => {
      this.activeTab === 'followers' ? this.getFollowers(): this.getFollowings();
      if (this.id === this.authId) {
        this.chooseFollower.emit();
      }
    }), (err) => {
      this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
      console.log(err);
    };
  }
}


