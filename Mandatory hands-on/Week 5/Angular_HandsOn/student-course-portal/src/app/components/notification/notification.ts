import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.html',
  styleUrl: './notification.css',

  // Component-level provider:
  // This creates a NEW NotificationService instance
  // for this component and its child components only.
  // It is NOT shared across the application.
  providers: [NotificationService]
})
export class Notification {

  constructor(private notificationService: NotificationService) {}

  showNotification(): void {
    this.notificationService.show('Enrollment Successful!');
  }

}