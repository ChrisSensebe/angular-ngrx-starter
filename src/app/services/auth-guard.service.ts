import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const isAuthenticated = this.authService.getToken() !== null || undefined;
    if (!isAuthenticated) {
      this.router.navigateByUrl('/login');
    }
    return Promise.resolve(isAuthenticated);
  }
}
