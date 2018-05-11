import {Component} from '@angular/core';
import {AppState, selectAuthState} from './store/app.states';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  state$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.state$ = this.store.pipe(select(selectAuthState));
  }
}
