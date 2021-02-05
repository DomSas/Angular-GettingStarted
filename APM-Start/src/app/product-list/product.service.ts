import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  private productUrl = 'api/products/products.json';

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(
    handleError: any
  ): import('rxjs').OperatorFunction<IProduct[], any> {
    throw new Error('Method not implemented.');
  }
}
