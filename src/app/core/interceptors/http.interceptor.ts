import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class OfssInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(httpRequest);

    httpRequest = httpRequest.clone({
      withCredentials: true,
    });
    return next.handle(httpRequest);
  }
}
