import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarProductoComponent } from './guardar-producto/guardar-producto.component';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';
import { AuthGuard } from 'src/app/service/AuthGuard';

const routes: Routes = [
  { path: 'producto/Agregar', component: GuardarProductoComponent, canActivate: [AuthGuard] },
  { path: 'producto/Mostrar', component: MostrarProductosComponent, canActivate: [AuthGuard] },
  { path: 'producto/Mostrar/:id', component: MostrarProductoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
