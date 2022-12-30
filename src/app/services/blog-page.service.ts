import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogPageService {
  private server_url : string = "https://blog-handler-service.onrender.com";

  constructor(private httpClient : HttpClient) {
   }

  getData(uuid: string): Observable<Object> {
    return this.httpClient.get(this.server_url + '/blog',
    {
      params: new HttpParams().set('uuid', uuid)
    });
  }

  uploadBlog(formdata: any): Observable<Object> {

    return this.httpClient.post(this.server_url + '/blog',
    {
      data: formdata
    });
  }
}
