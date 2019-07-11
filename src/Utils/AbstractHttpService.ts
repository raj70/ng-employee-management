import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

export abstract class AbstractHttpService {
    protected readonly TOKEN = 'TOKEN_EM';

    constructor(protected http: HttpClient) {
    }

    protected LoginTokenOnHeader(): HttpHeaders {
        const headers = new HttpHeaders({
            Authorization: this.getToken()
        });

        return headers;
    }

    protected HeaderWithAuthToken(): HttpHeaders {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: this.getToken()
        });

        return headers;
    }

    isLogin(): boolean {
        const loginDetail = localStorage.getItem(this.TOKEN);
        return loginDetail !== null;
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