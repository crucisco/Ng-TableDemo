import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService{

  constructor(private http: HttpClient) { }
  
  public GetUsers() {
    return this.http.get('../assets/fakedata/users.json')
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
      return throwError(error.message || 'Unknown error!');
  }
}

export interface IUserService {
   GetUsers();
}