import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Producto } from 'src/app/model/producto/producto';
import { ProductoService } from 'src/app/service/producto/producto.service';
import { FormularioInputComponent } from 'src/app/utils/shared-module/formulario-input/formulario-input.component';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.scss'],
})
export class GuardarProductoComponent {

  constructor(private productoService: ProductoService) {}

  form: FormGroup = new FormGroup({});

  @ViewChild(FormularioInputComponent, { static: false })
  formularioInput!: FormularioInputComponent;

  enviarFormularios: boolean = false;
  resetearformularios: boolean = false;

  camposPorEstado: any[] = []; // Mantener una lista de campos adicionales según el estado

  fields: any[] = [
    {
      name: 'nombre',
      label: 'Nombre',
      defaultValue: '',
      required: true,
      placeholder: 'Ingrese el nombre del producto',
      type: 'text',
    },
    {
      name: 'descripcion',
      label: 'Descripción',
      defaultValue: '',
      required: true,
      placeholder: 'Ingrese la descripción del producto',
      type: 'text',
    },
    {
      name: 'estado',
      label: 'Estado',
      defaultValue: undefined,
      required: true,
      type: 'radio-button',
      options: ['liquido', 'solido', 'polvo'],
    },
  ];
  fields_copy: any[] = this.fields;

  getCamposPorEstado(estado: any): any[] {
    const camposPorEstado: any[] = [];

    this.estadoOpciones[estado].forEach((producto) => {
      camposPorEstado.push({
        name: producto.toLowerCase().replace(/\s+/g, '-'), // Convertir el nombre en lowercase y reemplazar espacios con guiones
        label: producto,
        defaultValue: undefined,
        required: true,
        placeholder: `Ingrese el ${producto.toLowerCase()}`,
        type: 'checkbox',
      });
    });

    return camposPorEstado;
  }

  estadoOpciones: { [key: string]: string[] } = {
    liquido: ['250ml', '300ml', '500ml','500ml con tapa','500ml con dispensador', '700ml', '1L', '1/2gl', '1gl', '5gl'],
    solido: ['1kg'],
    polvo: ['1kg', '2.5kg', '5kg', '10kg', '25kg'],
  };

  formSubmit(data: any) {
    // Limpia los campos que su valor sea 'undefined' o 'null'
    Object.keys(data).forEach((key) => {
      if (data[key] === undefined || data[key] === null) {
        delete data[key];
      }
    });

    //con cada valor que contenga en el nombre 'input' hago un objeto Producto y lo agrego a un array
    let productosArray: Producto[] = [];
    Object.keys(data).forEach((key) => {
      if (key.includes('input')) {
        let producto: Producto = new Producto();
        producto.nombre = data.nombre;
        producto.descripcion = data.descripcion;
        producto.estado = data.estado;
        producto.presentacion = key.replace('-input', '');
        producto.precio = data[key];

        productosArray.push(producto);
        delete data[key];
      }
    });


    
    productosArray.forEach((producto) => {
      this.productoService.saveProducto(producto).subscribe((data) => {
        console.log(data);
      });
    });
    

    //console.log(productosArray);
    //console.log(this.getCamposPorEstado('estado'));
  }

  formReset(data: any) {
    // Handle form reset
    console.log(data);
  }

  onValorUnicoSeleccionado(data: any) {
    this.despliega(data);
    // Puedes hacer lo que desees con el valor seleccionado, por ejemplo, realizar alguna acción o asignarlo a alguna variable
  }

  despliega(data: any) {
    if (data.fieldName === 'estado') {
      const estadoSeleccionado = data.value;
      console.log(estadoSeleccionado);
      // Actualiza el tipo de campo a 'checkbox' cuando se selecciona un radio-button
      if (
        estadoSeleccionado === 'liquido' ||
        estadoSeleccionado === 'solido' ||
        estadoSeleccionado === 'polvo'
      ) {
        this.camposPorEstado = this.getCamposPorEstado(estadoSeleccionado).map(
          (campo) => {
            return {
              ...campo,
              type: 'checkbox',
              required: false,
            };
          }
        );
      } else {
        this.camposPorEstado = [];
      }

      this.fields_copy = [...this.fields, ...this.camposPorEstado]; //
    }
  }

  toggleAdditionalField(option: string) {
    this.formularioInput.toggleAdditionalField(option);
  }
}
