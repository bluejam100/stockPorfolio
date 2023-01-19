import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {serial} from "../Data";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiServerUrl ='C:\\StockChart\\src\\assets\\backEnd.json'
  constructor(private http: HttpClient) { }

  public getStocks(): Observable<serial> {
    return this.http.get<serial>( ` ${this.apiServerUrl}`);
  }

}
