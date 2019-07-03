import { Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output()
  username: string;

  constructor() { }

  login(username: string, password: string): void {
    this.username = username;
    console.log(this.username, password);
  }

  logout(): void {
    console.log('Auth-Service', 'logging out');
  }
}
