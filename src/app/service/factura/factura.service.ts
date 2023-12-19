import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from 'src/app/model/factura/factura';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }

  public getFacturas() {
    return this.http.get<Factura[]>(`${baseUrl}/facturas`);
  }

  public getFactura(id: number) {
    return this.http.get<Factura>(`${baseUrl}/facturas/${id}`);
  }

  public saveFactura(factura: Factura) {
    return this.http.post(`${baseUrl}/facturas`, factura);
  }

}
