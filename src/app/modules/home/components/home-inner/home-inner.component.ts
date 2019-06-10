import { Component, 
         OnInit, 
         Input 
} from '@angular/core';
import { HomeData } from '../../interfaces/serverAnswer';

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {
  @Input() data: HomeData;
  constructor() {}
  ngOnInit() {}
}
