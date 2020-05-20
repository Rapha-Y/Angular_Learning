import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';

import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  private _url:string = "assets/data/employees1.json";

  constructor(private http:HttpClient) { }

  getEmployees():Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse) {
    return observableThrowError(error.message || "Server Error");
  }

}
