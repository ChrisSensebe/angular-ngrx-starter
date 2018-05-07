import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {matchingFieldsValidator} from '../../validators/matching-fields.validator';
import {Store} from '@ngrx/store';
import {AppState, selectAuthState} from '../../store/app.states';
import {SignUp} from '../../store/actions/auth.actions';
import {SignUpPayload} from '../../models/sign-up-payload.interface';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  message: string;
  state$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required)
    }, {validators: matchingFieldsValidator('password', 'passwordRepeat')});
    this.state$ = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.state$.subscribe(state => this.message = state.message);
  }

  signUp() {
    const payload: SignUpPayload = {
      username: this.signUpForm.get('username').value,
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
    };
    this.store.dispatch(new SignUp(payload));
  }
}
