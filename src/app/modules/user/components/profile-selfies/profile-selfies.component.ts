import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'app/common/services/user.service';
import { UploadSelfies, FavouriteImg } from '../../interfaces/user-intarface';
import { ActivatedRoute } from "@angular/router";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images: FavouriteImg[];
  id: string;
  @Input() isCurrentUser: boolean;
  @Output('load') load = new EventEmitter();
  @Output() img = new EventEmitter();
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.loadImages();
  }

  loadImages(): void {
    this.userService.uploadSelfies(this.id).subscribe((res: UploadSelfies) => {
      this.images = res.images;
    })
  }

  loadPhotos(input): void {
    const files = Array.from(input.files);
    this.userService.uploadPhotos(files).subscribe((res) => {
      this.loadImages();
    }, (err) => {
      this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'try again later'});
      console.log(err);
    });
  }

  showImg(): void {
    this.img.emit(this.images);
  }

}
