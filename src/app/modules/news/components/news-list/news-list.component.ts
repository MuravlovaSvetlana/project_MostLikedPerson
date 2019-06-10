import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { NewsResponse, NewItem } from '../../interfaces/news.interface';
import { UserService } from '@services/user.service';
import { GlobalAuthService } from '@services/global-auth.service';
import { zip } from 'rxjs';
import { MessageService } from 'primeng/api';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  id: string;
  response: NewsResponse;
  news: NewItem[] = []; 
  followings: Array<string> = [];
  step = '0';
  showCarousel = false;
  carouselId: Array<string>;
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor(
    private newsService: NewsService,
    private userService: UserService,
    private globalauth: GlobalAuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.id = this.globalauth.userId;    
    this.getNews();
  }

  getNews(): void {
    zip (
      this.newsService.getNews(this.step),
      this.userService.uploadFollowings(this.id)
    )
    .subscribe(([res, resp]: any) => {
      this.response = res;      
      resp.users.forEach(element => {
        this.followings.push(element._id);
      });
      this.response.news.forEach(element => {
        element._buttonText = this.followings.some(i => i === element.owner._id) ? 'following' : 'follow';
      });
      this.news = [...this.news, ...this.response.news];
    }), (err) => {
      this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
      console.log(err);
    };
  }

  onScrollChange(event: number): void {
    let count = parseFloat(this.step);
    if (this.viewport.getRenderedRange().end === this.news.length) {
      count++;
      this.step = count + '';
      this.getNews();
    } 
  }

  carouselImages(id: Array<string>): void {
    this.showCarousel = true;
    this.carouselId = id;
  }

  closeCarousel(): void {
    this.showCarousel = false;
  }
}
