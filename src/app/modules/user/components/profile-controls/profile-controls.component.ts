import { Component, 
        OnInit, 
        Input, 
        Output, 
        EventEmitter, 
        OnChanges,
        SimpleChanges
} from '@angular/core';
import { User } from '../../interfaces/user-intarface';
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() isCurrentUser: boolean;
  @Output('newAvatar') newAvatar = new EventEmitter();
  activeTab: Observable<string>;
  tabList = [
      {
        tab: 'selfies',
        text: 'SELFIES'
      },
      {
        tab: 'my_glories',
        text: 'MY GLORIES'
      },
      {
        tab: 'favourites',
        text: 'FAVOURITES'
      },
      {
        tab: 'followers',
        text: 'FOLLOWERS'
      },
      {
        tab: 'followings',
        text: 'FOLLOWINGS'
      }
    ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeTab = this.route.queryParams.pipe(map((params) => params.tab));
    this.route.queryParams.subscribe((params) => {
      const isValidTab = this.tabList.some((item) => item.tab === params.tab);
      if (!params.tab || !isValidTab) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { tab: 'selfies' }
        });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.user = changes.user.currentValue;
  }
  
}
