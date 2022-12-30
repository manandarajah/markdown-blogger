import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private server_url : string = "https://blog-handler-service.onrender.com";

  constructor(private httpClient : HttpClient) {
   }

  getBlogs(category: string) {
    return this.httpClient.get(this.server_url + '/category',
    {
      params: new HttpParams().set('category', category)
    });
  }
}
