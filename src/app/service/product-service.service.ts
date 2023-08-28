import { Injectable } from '@angular/core';


import { Product } from '../model/Product'
import { of, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  data: Product[] = []
  public constructor(private http: HttpClient) {

  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/posts')
  }

}
