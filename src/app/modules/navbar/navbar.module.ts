import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from "@angular/router";
import { NotificationsComponent } from './components/notifications/notifications.component';
import { EmptyListModule } from '../empty-list/empty-list.module';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NotificationsComponent,
    NotificationItemComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    EmptyListModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
