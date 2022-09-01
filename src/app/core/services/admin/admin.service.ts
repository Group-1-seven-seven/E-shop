import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductItem } from 'src/app/models/product-item';
import { catchError, map, Observable, tap } from 'rxjs';
import { User } from '../../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getProducts = (page: number = 1, limit: number = 5, sort: string = 'sold', order: string = 'desc'): Observable<ProductItem[]> => {
    return this.http.get<ProductItem[]>(`${environment.url}/products?_page1=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`)
    .pipe(
      tap(x => x)
    )
  }

  getAllProducts = (): Observable<ProductItem[]> => {
    return this.http.get<ProductItem[]>(`${environment.url}/products`)
    .pipe(
      tap(x => x)
    )
  }

  getProductById = (id: number) => {
    return this.getAllProducts().pipe(
      map((x: ProductItem[]) => {
        return  x.filter( i => i.id === id)
      })
    )
  }

  addProducts = (data: ProductItem) => {
    return this.http.post(`${environment.url}/products`, data).pipe(
      catchError( x => x)
    )
  }

  editProduct = (data: ProductItem) => {
    return this.http.patch(`${environment.url}/products/${data.id}`, data).pipe(
      tap(x => x)
    )
  }

  deleteProduct(id: number) {
    return this.http.delete(`${environment.url}/products/${id}`).pipe(
      tap(x => x)
    )
  }


  getAllUsers = (): Observable<User[]> => {
    return this.http.get<User[]>(`${environment.url}/users`).pipe(
      tap(x => x)
    )
  }
}
