import { Component } from '@angular/core';
import { Producto } from 'src/app/model/producto/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.scss']
})
export class MostrarProductosComponent {

  displayedColumns: string[] = ['nombre', 'precio', 'estado', 'presentacion', 'descripcion', 'acciones'];
  dataSource: Producto[] = []

  constructor(private productoService:ProductoService) { }


  ngOnInit() {
    this.productoService.getProductos().subscribe(data => {
      this.dataSource = data;
      //console.log(this.dataSource);
    });
  }

  editarProducto(producto: Producto) {
    // Implementa la lógica para editar el producto correspondiente
    console.log('Editar producto:', producto);
  }

  eliminarProducto(producto: Producto) {
    // Implementa la lógica para eliminar el producto correspondiente
    console.log('Eliminar producto:', producto);
  }
}
