import {throwError as observableThrowError, Observable} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LogOut} from '../store/actions/auth.actions';
import {AppState} from '../store/app.states';
import {Store} from '@ngrx/store';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((response: any) => {
        if(response instanceof HttpErrorResponse) {
          switch (response.status) {
            case 401:
              this.store.dispatch(new LogOut);
              return observableThrowError(response);
            default:
              return observableThrowError(response);
          }
        }
      })
    );
  }
}
