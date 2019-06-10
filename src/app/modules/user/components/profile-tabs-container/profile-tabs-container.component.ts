import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { FavouriteImg } from '../../interfaces/user-intarface';


@Component({
  selector: 'app-profile-tabs-container',
  templateUrl: './profile-tabs-container.component.html',
  styleUrls: ['./profile-tabs-container.component.css']
})
export class ProfileTabsContainerComponent implements OnInit {
  activeTab: Observable<string>;
  showCarousel = false;
  carouselId: Array<string> = [];
  authId: string;
  @Input() isCurrentUser: boolean;
  @Output() uploadNewUser = new EventEmitter<string>();
  @Output() updateFollowers = new EventEmitter();
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activeTab = this.route.queryParams.pipe(map((params) => params.tab));
  }

  chooseUser(id:string): void {
    this.uploadNewUser.emit(id);
  }

  showImages(images: FavouriteImg[]): void {
    this.carouselId.splice(0, this.carouselId.length);    
    images.forEach(item => {
      this.carouselId.push(item._id);
    })
    this.showCarousel = true;
  }

  closeCarousel(): void {
    this.showCarousel = false;
  }

  chooseFollower():void {
    this.updateFollowers.emit();
  }
 }
