import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  validation: boolean;

  constructor(private authService: AuthService) {
    this.username = '',
      this.password = '';
  }

  ngOnInit() {
  }

  login(e): void {
    e.preventDefault();

    if (this.username === '' || this.password === '') {
      return;
    }

    this.authService.login(this.username, this.password);
  }

  valueChange(e) {
    console.log(e);
  }

  onfocusOut(e) {
    if (e.target.id === `email`) {
      console.log(e.target.value, this.validation);
    } else if (e.target.id === `password`) {
      console.log(e.target.value, this.validation);
    }
  }
}
