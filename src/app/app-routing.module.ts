import {NgModule} from '@angular/core';
import {LandingComponent} from './components/landing/landing.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LogInComponent} from './components/log-in/log-in.component';
import {RouterModule} from '@angular/router';
import {SuccessComponent} from './components/success/success.component';
import {AuthGuard} from './services/auth-guard.service';

const routes = [
  { path: 'login', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard] },
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
