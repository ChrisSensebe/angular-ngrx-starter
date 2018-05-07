import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user-model.interface';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/throw';
import {SignUpPayload} from '../models/sign-up-payload.interface';
import {LogInPayload} from '../models/log-in-payload.interface';

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

  login(loginPayload: LogInPayload): Observable<User> {
    const isValidUser = loginPayload.email === 'user@email.com' && loginPayload.password === 'password';
    const errorMessage = 'Invalid email or password';
    return isValidUser ? of(user).delay(delay) : Observable.throw(new Error(errorMessage));
  }

  signup(signupPayload: SignUpPayload): Observable<User> {
    return of(user).delay(delay);
  }
}
