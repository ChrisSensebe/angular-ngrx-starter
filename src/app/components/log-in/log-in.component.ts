import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppState, selectAuthState} from '../../store/app.states';
import {select, Store} from '@ngrx/store';
import {LogIn} from '../../store/actions/auth.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  state$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.state$ = this.store.pipe(select(selectAuthState));
  }

  ngOnInit() {
  }

  login() {
    const payload = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };
    this.store.dispatch(new LogIn(payload))
  }
}
