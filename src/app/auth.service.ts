import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login() {
    console.log('AuthService: logging in');
  }

  logout() {
    console.log('AuthService: logging out');
  }
}
