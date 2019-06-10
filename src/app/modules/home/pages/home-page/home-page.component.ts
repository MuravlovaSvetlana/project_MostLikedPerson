import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { zip } from 'rxjs';
import { HomeData } from '../../interfaces/serverAnswer';
import { Challenge } from 'app/common/interfaces/global-interfaces'; 
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  homePageData: HomeData;
  challenges: [Challenge];
  isLoading = true;
  constructor(
    private homeService: HomeService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    zip(
      this.homeService.getHomePage(),
      this.homeService.getActiveChallenges()
    )
      .subscribe(([homePageData, { challenges }]: any) => {
        this.homePageData = homePageData;
        this.challenges = challenges;
      }, (err) => {
        this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
        console.log(err);
      }, () => {
        this.isLoading = false;
      });
  }
}
