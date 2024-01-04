import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/model/producto/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss'],
})
export class EditarProductoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { producto: Producto },
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    // Accede a la información del producto
    const producto = this.data.producto;

    // Haz lo que necesites con la información del producto
    console.log('Información del producto:', producto);

    this.formularioProducto = new FormGroup({
      nombre: new FormControl(producto.nombre, Validators.required),
      precio: new FormControl(producto.precio, Validators.required),
      estado: new FormControl(producto.estado, Validators.required),
      presentacion: new FormControl(producto.presentacion, Validators.required),
      descripcion: new FormControl(producto.descripcion, Validators.required),
    });
  }
  cerrarModal() {
    this.dialogRef.close();
  }
  formularioProducto: FormGroup = new FormGroup({});
  guardarCambios() {
    if (this.formularioProducto.valid) {
      const producto = this.formularioProducto.value;
      producto.id = this.data.producto.id;
      this.productoService.editarProducto(producto).subscribe((data) => {
        console.log(data);
        this.cerrarModal();
      });
    }
    this.dialogRef.close();
  }
}
