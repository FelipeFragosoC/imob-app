import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {AppService} from '../../app.service';
import {User} from '../../model/user';


@Injectable({
    providedIn: 'root'
})
export class LoginService extends AppService {

    public user: any;

    public nextUrl: string;

    constructor(private httpClient: HttpClient) {
        super();
    }

    doLogin(user: User): Observable<string> {
        const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
        return this.httpClient.post(this.baseApi + 'emob-api/login', user, {headers, responseType: 'text'}).pipe(
            catchError(this.handleError)
        );
    }
}
