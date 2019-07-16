import { Injectable, Output } from '@angular/core';
import { Message } from './models/Message';
import { AbstractHttpService } from 'src/app/Utils/AbstractHttpService';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractHttpService {

  responseMessage: Message;

  @Output()
  username: string;

  constructor(protected http: HttpClient) {
    super(http);
    this.username = '';
  }

  /* For dev purpose: https://angular.io/guide/build#proxying-to-a-backend-server */
  login(username: string, password: string): Promise<Message> {
    const url = '/api/Auth/Login';

    return new Promise<Message>(async (resolve, reject) => {
      await this.http.post<Message>(url, {
        email: username,
        password
      }).subscribe(o => {
        this.username = username;
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

  setUsername(): void {
    if (this.isLogin()) {
      const b = JSON.parse(localStorage.getItem(this.TOKEN)) as { username: '', token: '' };
      this.username = b.username;
    } else {
      this.username = '';
    }
  }


}
