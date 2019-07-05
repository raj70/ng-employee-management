import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output()
  username: string;
  isLogin: boolean;

  constructor() { }

  login(username: string, password: string): void {
    this.username = username;
    console.log(username, password);
    this.isLogin = true;
  }

  logout(): void {
    console.log('Auth-Service', 'logging out');
  }
}
