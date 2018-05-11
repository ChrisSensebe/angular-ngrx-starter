import { Component, OnInit } from '@angular/core';
import {AppState, selectAuthState} from '../../store/app.states';
import {select, Store} from '@ngrx/store';
import {LogOut} from '../../store/actions/auth.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  state$: Observable<any>;
  username: string;

  constructor(private store: Store<AppState>) {
    this.state$ = this.store.pipe(select(selectAuthState));
  }

  ngOnInit() {
    this.state$.subscribe(state => this.username = state.user ? state.user.username : '');
  }

  logout() {
    this.store.dispatch(new LogOut);
  }
}
