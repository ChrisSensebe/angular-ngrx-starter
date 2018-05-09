import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, selectAuthState} from '../../store/app.states';
import {Observable} from 'rxjs/Observable';
import {LogOut} from '../../store/actions/auth.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  state$: Observable<any>;
  isAuthenticated: boolean;

  constructor(private store: Store<AppState>) {
    this.state$ = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.state$.subscribe(state => this.isAuthenticated = state.isAuthenticated);
  }

  logout() {
    this.store.dispatch(new LogOut);
  }
}
