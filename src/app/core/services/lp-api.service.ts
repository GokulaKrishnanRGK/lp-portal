import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {DataRequest} from "../models/data.request";
import {DataResponse} from "../models/data.response";
import {environment} from "../../../environment/environment";
import {catchError, delay, finalize, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LpApiService {

  constructor(private httpClient: HttpClient,) {
  }

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error.body}`);
    }
    return throwError(error);
  }

  read(dataQuery: DataRequest): any {
    /*if (dataQuery.showLoader) {
      this.eventService.emitLoaderEvent();
    }*/
    if (dataQuery.config) {
      dataQuery.config.context = dataQuery.reqContext;
    }
    return this.httpClient
    .get<DataResponse>(environment.apiUrl + dataQuery.url, dataQuery.config)
    .pipe(
      map(response => {
        return Object.assign(new DataResponse(), response);
      }),
      finalize(() => {
        /*if (dataQuery.showLoader) {
          this.eventService.emitLoaderStopEvent();
        }*/
      }),
      catchError(LpApiService.handleError)
    );
  }

  write(dataQuery: DataRequest): Observable<any> {
    /*if (dataQuery.showLoader) {
      this.eventService.emitLoaderEvent();
    }*/
    return this.httpClient
    .post<DataResponse>(
      environment.apiUrl + dataQuery.url,
      dataQuery.getBody(),
      dataQuery.getHeaders()
    )
    .pipe(
      map(res => {
        return Object.assign(new DataResponse(), res);
      }),
      finalize(() => {
        /*if (dataQuery.showLoader) {
          this.eventService.emitLoaderStopEvent();
        }*/
      }),
      catchError(LpApiService.handleError)
    );
  }

  put(dataQuery: DataRequest): Observable<any> {
    return this.httpClient
    .put<DataResponse>(
      environment.apiUrl + dataQuery.url,
      dataQuery.getBody(),
      dataQuery.getHeaders()
    )
    .pipe(
      map(res => {
        return Object.assign(new DataResponse(), res);
      }),
      catchError(LpApiService.handleError)
    );
  }

  delete(dataQuery: DataRequest): Observable<any> {
    /*if (dataQuery.showLoader) {
      this.eventService.emitLoaderEvent();
    }*/
    return this.httpClient
    .delete<DataResponse>(environment.apiUrl + dataQuery.url, dataQuery.getHeaders())
    .pipe(
      delay(2000),
      map(res => {
        return Object.assign(new DataResponse(), res);
      }),
      finalize(() => {
        /*if (dataQuery.showLoader) {
          this.eventService.emitLoaderStopEvent();
        }*/
      }),
      catchError(LpApiService.handleError)
    );
  }

}
