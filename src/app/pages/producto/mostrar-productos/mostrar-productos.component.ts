import { Component } from '@angular/core';
import { Producto } from 'src/app/model/producto/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.scss'],
})
export class MostrarProductosComponent {
  displayedColumns: string[] = [
    'nombre',
    'precio',
    'estado',
    'presentacion',
    'descripcion',
    'acciones',
  ];
  dataSource: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe((data) => {
      this.dataSource = data;
      //console.log(this.dataSource);
    });
  }

  editarProducto(producto: Producto) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true; // El modal no se puede cerrar haciendo clic fuera de él
    dialogConfig.autoFocus = true;
    dialogConfig.data = { producto }; // Puedes pasar datos al componente del modal si es necesario

    // Abre el modal
    const dialogRef = this.dialog.open(EditarProductoComponent, dialogConfig);

    // Suscríbete a eventos del modal si es necesario
    dialogRef.afterClosed().subscribe((result) => {
      // Lógica después de cerrar el modal (si es necesario)
      console.log('Modal cerrado con resultado:', result);
    });
  }

  eliminarProducto(producto: Producto) {
    // Implementa la lógica para eliminar el producto correspondiente
    console.log('Eliminando producto:', producto);
  }
}
