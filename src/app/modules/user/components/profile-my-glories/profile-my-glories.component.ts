import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-my-glories',
  templateUrl: './profile-my-glories.component.html',
  styleUrls: ['./profile-my-glories.component.css']
})
export class ProfileMyGloriesComponent implements OnInit {
  text = "You haven't got any glory yet"
  constructor() { }

  ngOnInit() {}

}
