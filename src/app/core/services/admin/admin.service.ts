import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';
import { catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getProduct = (page: number = 1, limit: number = 5, sort: string = 'sold', order: string = 'desc'): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.url}/products?_page1=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`).pipe(
      tap(x => x)
    )
  }

  getAllProduct = (): Observable<Product[]> => {
    return this.http.get<Product[]>(`${environment.url}/products`).pipe(
      tap(x => x)
    )
  }

  getProductById = (id: number) => {
    return this.getAllProduct().pipe(
      map((x: Product[]) => {
        return  x.filter( i => i.id === id)
      })
    )
  }

  addProduct = (data: Product) => {
    return this.http.post(`${environment.url}/products`, data).pipe(
      catchError( x => x)
    )
  }

  editProduct = (data: Product) => {
    return this.http.put(`${environment.url}/products/${data.id}`, data).pipe(
      tap(x => x)
    )
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.url}/products/${id}`).pipe(
      tap(x => x)
    )
  }
}
