import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Factura } from 'src/app/model/factura/factura';
import { Producto } from 'src/app/model/producto/producto';
import { FacturaService } from 'src/app/service/factura/factura.service';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { Utils } from 'src/app/utils/utils';



 

@Component({
  selector: 'app-guardar-facturas',
  templateUrl: './guardar-facturas.component.html',
  styleUrls: ['./guardar-facturas.component.scss']
})
export class GuardarFacturasComponent implements OnInit {

  

  enviarFormularios: boolean = false;
  resetearformularios: boolean = false;

  displayedColumns: string[] = ['nombre','cantidad', 'precio', 'subtotal', 'acciones'];
  dataSource: Producto[] = [];
  selectedProducts: Producto[] = [];

  factura = Factura;


  form!: FormGroup;

  constructor(private fb: FormBuilder, private facturaService: FacturaService, private productoService: ProductoService) {

  }



  ngOnInit(): void {
    this.form = this.fb.group({
      fecha: ['', Validators.required],
      nombreCliente: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      pagado: ['' ],
      entregado: [''],
      lineaFacturas: this.fb.array([]) 
    });
    this.productoService.getProductos().subscribe(data => {
      this.dataSource = data;
    });
;

  }

  onSubmit() {
    if (this.form.valid && this.selectedProducts.length > 0) {
      // Iterar sobre los productos seleccionados y calcular subtotal
      this.selectedProducts.forEach(producto => {
        producto.subtotal = producto.cantidad * producto.precio;
      });

      // Juntar los datos del formulario con los productos seleccionados
      //this.form.value.lineaFacturas = this.selectedProducts;

  

      console.log(this.form.value);

      this.facturaService.saveFactura(this.form.value).subscribe(data => {
        console.log(data);
      });
    } else {
      console.error('El formulario es inválido');
      // El formulario es inválido, muestra un mensaje de error o realiza otras acciones.
    }
  }

  getSelectedRows(data: any) {
    // Handle the event
    this.selectedProducts = data;
  }

  onReset() {
    this.form.reset();
  }

  onValorUnicoSeleccionado(data: any) {
    // Puedes hacer lo que desees con el valor seleccionado, por ejemplo, realizar alguna acción o asignarlo a alguna variable
  }

  formReset(data: any) {
    // Handle form reset
    console.log(data);
  }

  calcularSubtotal(index: number, event: Event) {
    const nuevaCantidad = parseInt((event.target as HTMLInputElement).value, 10);
    const productoFormGroup = this.lineaFacturas.at(index) as FormGroup;
  
    if (!isNaN(nuevaCantidad)) {
      productoFormGroup.get('cantidad')?.setValue(nuevaCantidad);
      const producto = this.selectedProducts[index];
      producto.cantidad = nuevaCantidad;
      producto.subtotal = nuevaCantidad * producto.precio;
  
      // Actualizar el subtotal en el FormGroup
      productoFormGroup.get('subtotal')?.setValue(producto.subtotal);
    }
  }

  onItemSelected(selectedItem: any): void {
    console.log('Selected Item:', selectedItem);

    // Verificar si el producto ya está en la lista
    console.log(this.selectedProducts);
    const existingProduct = this.selectedProducts.find(product => product.id === selectedItem.id);

    if (existingProduct) {
      // Si el producto ya está en la lista, incrementar la cantidad
      existingProduct.cantidad++;
    } else {
      // Si el producto no está en la lista, agregarlo con cantidad 1
      selectedItem.cantidad = 1;
      selectedItem.subtotal = selectedItem.cantidad * selectedItem.precio;
      const productoFormGroup = this.fb.group({
        cantidad: [1, Validators.required],
        subtotal: [selectedItem.subtotal, Validators.required],
        idProducto: [selectedItem.id, Validators.required] ,
        nombre: [selectedItem.nombre, Validators.required],
        precio: [selectedItem.precio, Validators.required],
        presentacion: [selectedItem.presentacion, Validators.required],
        producto: [selectedItem, Validators.required]
      });
    
      // Agregar el FormGroup al FormArray
      this.lineaFacturas?.push(productoFormGroup);
      this.selectedProducts.push(selectedItem);
    }
  }

  get lineaFacturas(): FormArray  {
    return this.form.get('lineaFacturas') as FormArray;
  }

  removeProducto(index: number) {
    this.lineaFacturas.removeAt(index);
  }
}
