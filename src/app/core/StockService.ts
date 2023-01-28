import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import {Serial, Transaction} from "../Data";
import {firstValueFrom, Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {FormGroup} from "@angular/forms";



@Injectable({
  providedIn: 'root'
})
export class StockService {


  private url ='http://localhost:8080'
  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    let errormessage="";
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error} `);
      errormessage = `Error:  ${error.error}`;
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errormessage));
  }


  // public getPortfolio(userId: number): Observable<Serial> {
  //   return this.http.get<Serial>( `${this.apiServerUrl}/allData/${userId}`);
  //     //.pipe(catchError(this.handleError));
  // }


  public getPosts(){
    return this.httpClient.get(`${this.url}/allData/1`);
  }

  public getChart(){
    return firstValueFrom(this.httpClient.get(`${this.url}/allData/1`)).then( (data) => {return data} );
  }


  public getTransaction(transactionId : number, userId : number){

    return this.httpClient.get(`${this.url}/transaction/${transactionId}/${userId}`).pipe(
      catchError(this.handleError));
  }

// Change return type to transaction later
  public addStock(data : any, userId: number): Observable<Transaction> {
 return this.httpClient.post<Transaction>(`${this.url}/stock/buy/${userId}`, data).pipe(
   catchError(this.handleError));
  }
  public sellStock(data : any, userId: number): Observable<Transaction> {
    return this.httpClient.post<Transaction>(`${this.url}/stock/sell/${userId}`, data).pipe(
      catchError(this.handleError));
  }

  public getStock(userId: number, transactionId : number) {
  return this.httpClient.get(`${this.url}/transaction/${transactionId}/${userId}`);
  }

  public editTransaction(transactionId : number, userId:number, data:any) {
    return this.httpClient.put(`${this.url}/edit/${transactionId}/${userId}`, data);
  }
// Check if this one is received correctly
  public deleteTransaction(transactionId : number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/transaction/delete/${transactionId}`);
  }

}
