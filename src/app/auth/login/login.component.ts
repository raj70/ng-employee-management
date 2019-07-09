import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Message } from '../models/message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  message: Message;

  constructor(private authService: AuthService) {
    this.username = '';
    this.password = '';
    this.message = new Message();
  }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.controls.username.value;
      const password = form.controls.password.value;

      this.message = await this.authService.login(email, password);

      if (this.message.isError === false) {
        this.authService.record(this.message);
        this.authService.username = email;
      } else {
        this.authService.username = '';
      }
    }
  }
}
