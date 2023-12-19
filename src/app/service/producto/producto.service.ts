import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/model/producto/producto';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getProductos() {
    return this.http.get<Producto[]>(`${baseUrl}/productos`);
  }

  public getProducto(id: number) {
    return this.http.get<Producto>(`${baseUrl}/productos/${id}`);
  }

  public saveProducto(producto: Producto) {
    return this.http.post(`${baseUrl}/productos`, producto);
  }


}
