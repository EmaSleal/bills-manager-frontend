import { Component } from '@angular/core';
import { Factura } from 'src/app/model/factura/factura';
import { FacturaService } from 'src/app/service/factura/factura.service';

@Component({
  selector: 'app-mostrar-facturas',
  templateUrl: './mostrar-facturas.component.html',
  styleUrls: ['./mostrar-facturas.component.scss']
})
export class MostrarFacturasComponent {
  displayedColumns: string[] = ['nombreCliente', 'direccion', 'telefono', 'fecha','lineas','total', 'acciones'];
  dataSource: Factura[] = [];

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
    this.facturaService.getFacturas().subscribe(data => {
      data.forEach(factura => {
        factura.total = factura.lineaFacturas?.reduce((total, linea) => total + linea.subtotal, 0) || 0;
        //guardo el numero de lineas de la factura en el campo lineas
        factura.lineas = factura.lineaFacturas?.length || 0;
      });
      this.dataSource = data;
       console.log(this.dataSource);
    });
  }

  // Puedes implementar funciones adicionales para editar y eliminar facturas si es necesario
  editarFactura(factura: Factura) {
    // Implementa la lógica para editar la factura correspondiente
    console.log('Editar factura:', factura);
  }

  eliminarFactura(factura: Factura) {
    // Implementa la lógica para eliminar la factura correspondiente
    console.log('Eliminar factura:', factura);
  }

  onRowClick(row: any) {
    // Implementa la lógica para manejar el clic en una fila
    console.log('Fila clickeada:', row);
  }
}
