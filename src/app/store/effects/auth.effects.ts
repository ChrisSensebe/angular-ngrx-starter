import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthActionTypes, LogIn, LogInFailure, LogInSuccess, SignUp, SignUpFailure, SignUpSuccess} from '../actions/auth.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  @Effect()
  LogIn: Observable<any> = this.actions
    .ofType(AuthActionTypes.LOGIN)
    .map((action: LogIn) => action.payload)
    .switchMap(payload => {
      return this.authService.login(payload)
        .map(user => new LogInSuccess(user))
        .catch(error => Observable.of(new LogInFailure(error)));
    });

  @Effect({dispatch: false})
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap(user => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/success');
    })
  );

  @Effect({dispatch: false})
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  SignUp: Observable<any> = this.actions
    .ofType(AuthActionTypes.SIGNUP)
    .map((action: SignUp) => action.payload)
    .switchMap(payload => {
      return this.authService.signup(payload)
        .map(user => new SignUpSuccess(user))
        .catch(error => Observable.of(new SignUpFailure(error)))
    });

  @Effect({dispatch: false})
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap(user => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/success');
    })
  );

  @Effect({dispatch: false})
  SignupFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );

  @Effect({dispatch: false})
  LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('/log-in');
    })
  );
}
