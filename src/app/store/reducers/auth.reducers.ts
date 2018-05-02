import {User} from '../../models/user-model.interface';

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
