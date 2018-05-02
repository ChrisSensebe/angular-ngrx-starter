import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {matchingFieldsValidator} from '../../validators/matching-fields.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      passwordRepeat: new FormControl('', Validators.required)
    }, {validators: matchingFieldsValidator('password', 'passwordRepeat')});
  }

  ngOnInit() {
  }

  signUp() {
    console.log(this.signUpForm.value);
  }
}
