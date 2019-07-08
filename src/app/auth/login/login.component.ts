import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

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

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const email = form.controls["username"].value;
      const password = form.controls["password"].value;
      this.authService.login(email, password);
      this.authService.username = email;
    }
  }
}
