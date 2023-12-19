import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //por defecto se dirige a /factura/Agregar
  { path: '', redirectTo: 'factura/Agregar', pathMatch: 'full' },
  { path: 'producto', loadChildren: () => import('./pages/producto/producto.module').then(m => m.ProductoModule) },
  { path: 'factura', loadChildren: () => import('./pages/factura/factura.module').then(m => m.FacturaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
