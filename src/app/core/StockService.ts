import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import {Serial, Transaction} from "../Data";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {FormGroup} from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
export class StockService {


  private apiServerUrl ='http://localhost:8080'
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  public getPortfolio(userId: number): Observable<Serial> {
    return this.http.get<Serial>( `${this.apiServerUrl}/allData/${userId}`);
      //.pipe(catchError(this.handleError));
  }
// Change return type to transaction later
  public addStock(data : any, userId: number): Observable<Transaction> {
 return this.http.post<Transaction>(`${this.apiServerUrl}/stock/buy${userId}`, data);
  }
  public sellStock(id : number): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiServerUrl}/stock/sell`, id);
  }

  public getStock(id : number): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiServerUrl}/stock/read`, id);
  }

  public EditTransaction(transaction : Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.apiServerUrl}/transaction/edit`, transaction);
  }
// Check if this one is received correctly
  public deleteTransaction(id : number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/transaction/delete/${id}`);
  }

}
