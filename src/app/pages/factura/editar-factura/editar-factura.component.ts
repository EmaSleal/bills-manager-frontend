import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Factura } from 'src/app/model/factura/factura';
import { FacturaService } from 'src/app/service/factura/factura.service';

@Component({
  selector: 'app-editar-factura',
  templateUrl: './editar-factura.component.html',
  styleUrls: ['./editar-factura.component.scss']
})
export class EditarFacturaComponent {

  constructor(
    public dialogRef: MatDialogRef<EditarFacturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { factura: Factura },
    private facturaService: FacturaService
  ) {}

  formularioFactura: FormGroup = new FormGroup({});

  ngOnInit() {
    // Accede a la información del producto
    const factura = this.data.factura;

    // Haz lo que necesites con la información del producto
    console.log('Información del producto:', factura);

    this.formularioFactura = new FormGroup({
      fecha: new FormControl(factura.fecha, Validators.required),
      nombreCliente: new FormControl(factura.nombreCliente, Validators.required),
      direccion: new FormControl(factura.direccion, Validators.required),
      telefono: new FormControl(factura.telefono, Validators.required),
      pagado: new FormControl(factura.pagado, Validators.required),
      entregado: new FormControl(factura.entregado, Validators.required),

    });
  }
  cerrarModal() {
    this.dialogRef.close();
  }

  guardarCambios() {
    if (this.formularioFactura.valid) {
      const factura = this.formularioFactura.value;
      factura.id = this.data.factura.id;
      this.facturaService.editarFactura(factura).subscribe((data) => {
        console.log(data);
        this.cerrarModal();
      });
    }
    this.dialogRef.close();
  }

}
