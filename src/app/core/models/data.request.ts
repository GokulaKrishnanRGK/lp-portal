import {HttpContext} from '@angular/common/http';
import {CACHE_REQ, FORCE_FETCH} from '../interceptors/caching.interceptor';

export class DataRequest {
  private static RESPONSE_OBSERVER = {
    observe: 'response',
  };

  url: string;
  requestId: string;
  body: any;
  headers: any;
  config: any;
  reqContext: HttpContext = new HttpContext();
  showLoader: boolean;

  constructor(url: string) {
    this.url = url;
  }

  addBody(data: any) {
    this.body = data;
    return this;
  }

  getBody() {
    return this.body;
  }

  setHeaders(kv: any) {
    this.headers = kv;
    return this;
  }

  getHeaders() {
    return {headers: this.headers};
  }

  fullResponse() {
    this.config = DataRequest.RESPONSE_OBSERVER;
    return this;
  }

  addConfig() {
    this.config = {
      responseType: 'blob',
    };
  }

  queryConfig(cfg: any) {
    this.config = cfg;
    return this;
  }

  context(context: HttpContext) {
    this.config = {} || this.config;
    // this.config.context = context;
    this.reqContext = context;
  }

  hasLoader() {
    this.showLoader = true;
    return this;
  }

  cache() {
    this.config = {} || this.config;
    // this.config.context = new HttpContext().set(CACHE_REQ, true);
    this.reqContext.set(CACHE_REQ, true);
    return this;
  }

  forceFetch() {
    this.config = {} || this.config;
    this.reqContext.set(FORCE_FETCH, true);
    // this.config.context = eagerFetch();
    return this;
  }

  appendQueryParams(key: string, value: any) {
    const q = this.url.indexOf('?') > 0 ? '&' : '?';
    this.url += `${q}${key}=${value}`;
  }
}
