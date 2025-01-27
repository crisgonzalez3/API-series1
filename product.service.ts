import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://jsonblob.com/api/1313446273633935360';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addProduct(product: any): Observable<any> {
    // Aquí simulamos el POST ya que el JSONBlob no soporta POST
    return new Observable((observer) => {
      observer.next(product);
      observer.complete();
    });
  }

  deleteProduct(id: string): Observable<void> {
    // Simulación de eliminación
    return new Observable((observer) => {
      observer.next();
      observer.complete();
    });
  }
}
