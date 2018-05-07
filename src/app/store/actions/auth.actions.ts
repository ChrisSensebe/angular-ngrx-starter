import {Action} from '@ngrx/store';
import {SignUpPayload} from '../../models/sign-up-payload.interface';
import {LogInPayload} from '../../models/log-in-payload.interface';
import {User} from '../../models/user-model.interface';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] login success',
  LOGIN_FAILURE = '[Auth] login failure',
  SIGNUP = '[Auth] signUp',
  SIGNUP_SUCCESS = '[Auth] signUpSuccess',
  SIGNUP_FAILURE = '[Auth] signUpFailure',
  LOGOUT = '[Auth] logout'
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: LogInPayload) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: User) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: Error) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: SignUpPayload) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;
  constructor(public payload: User) {}
}

export class SignUpFailure implements Action{
  readonly type = AuthActionTypes.SIGNUP_FAILURE;
  constructor(public payload: Error) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | LogOut
