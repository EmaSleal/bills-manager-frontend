import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarProductoComponent } from './guardar-producto/guardar-producto.component';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';

const routes: Routes = [
  { path: 'producto/Agregar', component: GuardarProductoComponent },
  { path: 'producto/Mostrar', component: MostrarProductosComponent },
  { path: 'producto/Mostrar/:id', component: MostrarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
