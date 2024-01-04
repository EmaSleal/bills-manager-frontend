import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { GuardarProductoComponent } from './guardar-producto/guardar-producto.component';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { SharedModule } from 'src/app/utils/shared-module/shared-module.module';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';


@NgModule({
  declarations: [
    GuardarProductoComponent,
    MostrarProductoComponent,
    MostrarProductosComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    SharedModule,
  ]
})
export class ProductoModule { }
