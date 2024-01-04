import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './utils/shared-module/login/login.component';
import { AuthGuard } from './service/AuthGuard';

const routes: Routes = [
  //por defecto se dirige a /factura/Agregar
  { path: '', redirectTo: 'factura/Agregar', pathMatch: 'full' },
  {
    path: 'producto',
    loadChildren: () =>
      import('./pages/producto/producto.module').then((m) => m.ProductoModule),

    

  },
  {
    path: 'factura',
    loadChildren: () =>
      import('./pages/factura/factura.module').then((m) => m.FacturaModule),

  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
