import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Porfolio} from "../Porfolio";


@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiServerUrl ='C:\\StockChart\\src\\assets\\returnedFromBackEnd.json'
  constructor(private http: HttpClient) { }

  public getStocks(): Observable<Porfolio> {
    return this.http.get<Porfolio>( ` ${this.apiServerUrl}`)
  }

}
