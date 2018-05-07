import { Component, OnInit } from '@angular/core';
import {AppState, selectAuthState} from '../../store/app.states';
import {Store} from '@ngrx/store';
import {LogOut} from '../../store/actions/auth.actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  state$: Observable<any>;
  message: string | null;
  username: string;

  constructor(private store: Store<AppState>) {
    this.state$ = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.state$.subscribe(state => {
      this.message = state.message;
      this.username = state.user.username;
    });
  }

  logout() {
    this.store.dispatch(new LogOut());
  }
}
