import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  welcomeMessage: string;
  isAdmin: boolean;
  username: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    this.isAdmin = this.authService.hasRole('admin');
    this.username = user ? user.username : '';

    if (this.isAdmin) {
      this.welcomeMessage = `Bienvenido, ${user.username} (Admin)`;
    } else {
      this.welcomeMessage = `Bienvenido, ${user.username}`;
    }
  }
}
