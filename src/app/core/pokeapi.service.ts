import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:8080/allData/1';

  constructor(private httpClient: HttpClient) { }



}
