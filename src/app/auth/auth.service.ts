import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './models/message';
import { reject } from 'q';
import { race } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN = 'TOKEN_EM';

  responseMessage: Message;

  @Output()
  username: string;

  constructor(private http: HttpClient) { }

  /* For dev purpose: https://angular.io/guide/build#proxying-to-a-backend-server */

  login(username: string, password: string): Promise<Message> {
    const url = '/api/Auth/Login';
    return new Promise<Message>(async (resolve, reject) => {
      this.username = username;
      await this.http.post<Message>(url, {
        email: this.username,
        password
      }).subscribe(o => {
        this.responseMessage = o.message as unknown as Message;
        resolve(this.responseMessage);
      }, (error) => {
        this.responseMessage = error.error.message as unknown as Message;
        reject(this.responseMessage);
      }, () => {
        console.log('completed');
      });
    }).catch(reason => {
      return reason as Message;
    });
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN);
  }

  record(message: Message): void {
    if (message.data.length > 0) {
      const token = message.data[0].token;
      localStorage.setItem(this.TOKEN, JSON.stringify({ username: this.username, token }));
    }
  }

  isLogin(): boolean {
    const loginDetail = localStorage.getItem(this.TOKEN);
    return loginDetail !== null;
  }

  setUsername(): void {
    if (this.isLogin()) {
      const b = JSON.parse(localStorage.getItem(this.TOKEN)) as { username: '', token: '' };
      this.username = b.username;
    } else {
      this.username = '';
    }
  }

  getToken(): string {
    if (this.isLogin()) {
      const b = JSON.parse(localStorage.getItem(this.TOKEN)) as { username: '', token: '' };
      return b.token; /* could be expired one. ;) */
    } else {
      return '';
    }
  }
}
