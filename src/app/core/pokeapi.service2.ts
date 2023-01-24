import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:8080/allData/1';

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return firstValueFrom(this.httpClient.get(this.url)).then( (data) => {return data} );
  }

}
