import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LogOut} from '../store/actions/auth.actions';
import {AppState} from '../store/app.states';
import {Store} from '@ngrx/store';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private store: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .catch((response: any) => {
        if(response instanceof HttpErrorResponse) {
          switch (response.status) {
            case 401:
              this.store.dispatch(new LogOut);
              return Observable.throw(response);
            default:
              return Observable.throw(response);
          }
        }
      });
  }
}
