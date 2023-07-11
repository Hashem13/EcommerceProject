import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SingleProductService {
  private url = 'https://fakestoreapi.com/products/1';
  constructor(private httpClient: HttpClient) { }
  getProd(){
    return this.httpClient.get(this.url);
  }
}
