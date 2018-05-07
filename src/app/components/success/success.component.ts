import { Component, OnInit } from '@angular/core';
import {AppState} from '../../store/app.states';
import {Store} from '@ngrx/store';
import {LogOut} from '../../store/actions/auth.actions';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  logout() {
    this.store.dispatch(new LogOut());
  }
}
