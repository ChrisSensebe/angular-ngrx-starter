import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthActionTypes, LogIn, LogInSuccess, LogInFailure} from '../actions/auth.actions';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {tap} from 'rxjs/operators';
import {E} from '@angular/core/src/render3';

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
      return this.authService.login(payload.login, payload.email)
        .map(user => new LogInSuccess({token: user.token, email: payload.email}))
        .catch(error => Observable.of(new LogInFailure({error})));
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
}
