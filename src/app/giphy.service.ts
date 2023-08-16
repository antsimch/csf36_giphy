import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GiphyService {

  readonly baseUrl = "http://localhost:8080/api/get";

  constructor(private http: HttpClient) { }

  getGiphyByName(name: string) {
    const params = new HttpParams().set('name', name);

    console.log('params ' + params);
    return this.http.get<string[]>(this.baseUrl, { params: params });
  }
}
