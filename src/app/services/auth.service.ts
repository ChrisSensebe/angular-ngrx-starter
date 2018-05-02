import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user-model.interface';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

const user: User = {
  id: '1',
  username: 'username',
  email: 'email@test.com',
  token: 'token',
};
const delay = 500;

// fake AuthService simulate server calls
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<User> {
    return of(user).delay(delay);
  }

  signup(email: string, password: string): Observable<User> {
    return of(user).delay(delay);
  }
}
