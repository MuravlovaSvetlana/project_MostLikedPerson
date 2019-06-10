import { Component, OnInit } from '@angular/core';
import { WinersService } from '../../services/winers.service';
import { Winners } from '../../interfaces/winners-intarface';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent implements OnInit {
  winners: Winners;
  constructor(
    private winnersService: WinersService
  ) {}

  ngOnInit() {
    this.winnersService.getNews().subscribe((res: Winners) => {
      this.winners = res;
    })
  }
}
