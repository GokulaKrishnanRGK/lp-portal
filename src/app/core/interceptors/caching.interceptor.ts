import {
  HttpContext,
  HttpContextToken,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {Injectable} from '@angular/core';
// import {CacheService} from '../services/cache.service';
import {tap} from 'rxjs/operators';
import {of} from 'rxjs';

export const FORCE_FETCH = new HttpContextToken<boolean>(() => false);
export const CACHE_REQ = new HttpContextToken<boolean>(() => false);

export function cacheRequest() {
  return new HttpContext().set(CACHE_REQ, true);
}

export function eagerFetch() {
  return new HttpContext().set(FORCE_FETCH, true);
}

/*@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  /!*intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(httpRequest);

    httpRequest = httpRequest.clone({
      withCredentials: true
    });
    return next.handle(httpRequest);
  }*!/

  /!*test = (event: HttpEvent<any>, request) => {
    if (event instanceof HttpResponse) {
      this.cache.put(request, event);
    }
  };*!/

  // constructor(private cache: CacheService) {}

  /!*intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cacheable = req.context.get(CACHE_REQ);
    const eager = req.context.get(FORCE_FETCH);

    if (eager && cacheable) {
      return next.handle(req).pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.cache.put(req, event);
          }
        })
      );
    }

    if (eager || !cacheable) {
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req);
    if (cachedResponse !== null) {
      // console.log(`Response from Cache :- ${req.urlWithParams}`);
      return of(cachedResponse);
    }

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.put(req, event);
        }
      })
    );
  }*!/

  /!*private isRequestCachable(req: HttpRequest<any>) {
    return (req.method === 'GET') && this.shouldCache(req.urlWithParams);
  }*!/

  /!*shouldCache(urlWithParams: string) {
    let shouldCache = false;
    routes.forEach((pattern, value) => {
      if (urlWithParams.includes(value)) {
        shouldCache = true;
      }
    });
    return shouldCache;
  }*!/
}*/
