import { Component, OnInit, Output } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.scss']
})
export class AuthNavComponent implements OnInit {

  @Output()
  username: string;

  constructor(private authService: AuthService) {
    this.username = this.authService.username;
    this.authService.setUsername();
  }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
  }
}
