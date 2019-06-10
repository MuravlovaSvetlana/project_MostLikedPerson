import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { Notification } from '../../interfaces/notification-interface';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public notifications: Notification;
  constructor(
    private navbarService: NavbarService,
  ) { }

  ngOnInit() {
    this.navbarService.getNotifications().subscribe((res: Notification) => {
      this.notifications = res;
  }, (err) => {
    console.log(err);
    });
  }
}
