import {User} from '../../models/user-model.interface';
import {All, AuthActionTypes} from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null
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
        }
      };
    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state
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
        }
      };
    case AuthActionTypes.SIGNUP_FAILURE:
      return {
        ...state
      };
    case AuthActionTypes.LOGOUT:
      return {
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
