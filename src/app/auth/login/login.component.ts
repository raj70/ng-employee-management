import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Message } from '../models/Message';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  message: Message;

  private returnUrl: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.username = '';
    this.password = '';
    this.message = new Message();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  async onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.controls.username.value;
      const password = form.controls.password.value;

      this.message = await this.authService.login(email, password);

      if (!this.message.isError) {
        this.authService.record(this.message);
        this.authService.username = email;
        this.router.navigateByUrl(this.returnUrl);
      } else {
        this.authService.username = '';
      }
    }
  }
}
