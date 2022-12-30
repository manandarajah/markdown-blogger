import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private server_url : string = "https://blog-handler-service.onrender.com";

  constructor(private httpClient : HttpClient) {

  }

  getData(uuid: string): Observable<Object> {
    return this.httpClient.get(this.server_url + '/',
    {
      params: new HttpParams().set('uuid', uuid)
    });
  }

  exist(formdata: any): Observable<Object> {
    return this.httpClient.post(this.server_url + '/login',
    {
      data: formdata
    });
  }

  insert(formdata: any): Observable<Object> {
    formdata.bdate = new Date(formdata.bdate).toISOString();

    return this.httpClient.post(this.server_url + '/register',
    {
      data: formdata
    });
  }
}
