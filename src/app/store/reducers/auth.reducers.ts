import {User} from '../../models/user-model.interface';
import {All, AuthActionTypes} from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  message: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  message: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.id,
          username: action.payload.username,
          token: action.payload.token,
          email: action.payload.email
        },
        message: 'login success'
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        message: 'Incorrect email or password'
      };
    case AuthActionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.id,
          username: action.payload.username,
          token: action.payload.token,
          email: action.payload.email
        },
        message: 'signup success'
      };
    case AuthActionTypes.SIGNUP_FAILURE:
      return {
        ...state,
        message: 'Error creating user'
      };
    case AuthActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
